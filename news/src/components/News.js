import React, { Component } from "react";
import NewsItems from "./NewsItems";

export class News extends Component {
  
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    };
  }

  async componentDidMount(){
    let url="https://newsapi.org/v2/everything?q=apple&from=2023-02-01&to=2023-02-01&sortBy=popularity&apiKey=d9484ba0267746dfba9de285f6c426bb";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles: parsedData.articles})
  }

  render(){
    return(
      <div className="container my-3">
        <h2>NewsApp - Top News Headlines</h2>
        <div className="row">
        {this.state.articles.map((element)=>{ 
          return <div className="col-md-4" key={element.url}>
            <NewsItems title={element.title.slice(0,45)} description={element.description.slice(0,80)} imageurl={element.urlToImage} newsurl={element.url}/>
          </div>
        })}
        </div>
        <div className="container d-flex justify-content-between">
        <button type="button" class="btn btn-dark">Previous</button>
        <button type="button" class="btn btn-dark">Next</button>
        </div>
      </div>
    );
  }
}

export default News;
