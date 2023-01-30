import React, { Component } from 'react'

export class NewsItems extends Component {
  render() {
    let {title, descripion}=this.props;
    return (
      <div>
        <div class="card" style={{width: "18rem;"}}>
          <img src="..." class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <p class="card-text">{descripion}</p>
            <a href="/" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItems
