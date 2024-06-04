import React, { Component } from 'react'

export default class Newsitems extends Component {

  render() {
    let {title,description,ImageUrl,url}=this.props;
    
    return (
  
      <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
 
  <img src={!ImageUrl?"https://www.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej-760x400.webp":ImageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={url} target='_blank' className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
      </div>

      
    )
  }
}
