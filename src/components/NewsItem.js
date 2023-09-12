import React, { Component } from 'react';

export class NewsItem extends Component {
  render() {
    let { title, description, imgurl, newsUrl, author, date, source} = this.props;
    return (
      <div>
        <div className="card">
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex:'1' , left: '88%'}}>{source}</span>
          <img src={!imgurl ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPvlmYJUQmx55XV7mD_INQCHIA1NXMrXuE8A&usqp=CAU" : imgurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-body-secondary"><b>By {!author?"Unknown": author} on {date}</b></small></p>
            <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
