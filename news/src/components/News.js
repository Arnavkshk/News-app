import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
  constructor(){
    super();
    console.log("hello i am a constructor");
    this.state={
      
    }
  }
  render() {
    return (
      <div className='container my-3'>
        <h2>NewsApp - Top News Headlines</h2>
        <div className="row">
        <div className="col-md-4">
        <NewsItems/>
        </div>
        <div className="col-md-4">
        <NewsItems/>
        </div>
        <div className="col-md-4">
        <NewsItems/>
        </div>
        </div>
      </div>
    )
  }
}

export default News
