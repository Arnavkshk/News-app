import React, { Component } from 'react'

export class NewsItems extends Component {
  render() {
    let {title, description, imageurl ,newsurl,date,author}=this.props;
    return (
      <div className='my-3'>
        <div className="card my-3 mx-2">
          <img src={imageurl} className="card-img-top" alt=""/>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">by {!author?"Uknown" :  author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsurl} target= "_blank" className="btn btn-sm btn-dark" rel="noreferrer">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItems
