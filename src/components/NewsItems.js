import React from 'react'

const NewsItems=(props)=>  {
 
    let {title, description, imageUrl, url, author, date, source  }= props;
    return (
        <>
       
     <div className="card my-3" >
     <div><span className="  badge rounded-pill bg-danger" style={{display:'flex', justifyContent:'flex-end', position:'absolute',
    right: '0'}}>
                                      {source}</span></div>
     
  <img src={imageUrl?imageUrl:'https://gumlet.assettype.com/freepressjournal/2022-10/d5b10a29-56d6-4c88-b11e-f2cf0e13073b/Untitled_design__17_.jpg?rect=0%2C0%2C3900%2C2048&w=1200&auto=format%2Ccompress&ogImage=true'} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <p className="card-text"><small className="text-muted">By {author?author:'Unknown'} at {new Date(date).toGMTString()}</small></p>
    <a href={url} rel="noreferrer" target='_blank' className="btn btn-sm btn-dark">Read More</a>
  </div>
  
</div>

  </>
      
        
      
    )
  
}


export default  NewsItems