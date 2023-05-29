import React, {useEffect,  useState} from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

  const News=(props)=>  {
   
   const [articles, setArticles]= useState([])
   const [loading, setLoading]= useState(true)
   const [page, setPage]= useState(1)
   const [totalResults, setTotalResults]= useState(0)


  const capitalizeFirstLetter=(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
    
   

    const updateNews=async()=>{
      props.setProgress(0);
      let url= `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=66a5a7d28edc4aabb786449026d4e3ad&page=${page}&pageSize=${props.pageSize}`;
      
      setLoading(true)
      let data= await fetch(url);
      props.setProgress(30);
      let parsedData= await data.json();
      props.setProgress(70);

      setArticles(parsedData.articles)
      setLoading(false)
      
      setTotalResults(parsedData.totalResults)
     
      props.setProgress(100);
      

    }
    useEffect(()=>{
      updateNews();
      // eslint-disable-next-line

    }, [])
    
   
    const fetchMoreData = async() => {
      
      setPage( page + 1)
      let url= `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=66a5a7d28edc4aabb786449026d4e3ad&page=${page+1}&pageSize=${props.pageSize}`;
      setLoading( true)
      let data= await fetch(url);
      let parsedData= await data.json();
       
      setArticles(articles.concat(parsedData.articles))
      setTotalResults(parsedData.totalResults)
      setLoading(false)
    };
      
    return (
        <>
          
        <h1 className='text-center ' style={{margin:'45px 0px', marginTop:"100px"}}>News Crow - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
        {loading &&<Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
          <div className="container">
         <div className="row">
         {articles.map((element)=>{
          return <div className="col-md-4" key={element.url.id}>
           <NewsItems  title={element.title.slice(0, 45)} description={element.description?element.description.slice(0, 80):''} imageUrl={element.urlToImage}
                       url={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
           </div>
         })}
         
        
        
         </div>
         </div>
         </InfiniteScroll>
       
      </>
        
        
    )
  }

      
     
export default  News   
     
      

     
        
    
 
  
    
    
        
       
          
     
      
      

   
   
       
