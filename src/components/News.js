import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export class News extends Component {

  static defaultProps = {
    country : 'in',
    pageSize : 6,
    category : 'general'
  }

  static propTypes = {
    country : PropTypes.string,
    pageSize : PropTypes.number,
    category : PropTypes.string 
  }


  articles = [
    
     ]
  constructor(){
    super();
    console.log("Hello I am a constructor");
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
      totalResults: 0,

    }
  }

  async updateNews(pageNo){
    console.log("cdm");
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3e268e40ce3e423a9727ef6687dcf13f&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults }); 
  }

  async componentDidMount() {
    //console.log("cdm");
    //let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3e268e40ce3e423a9727ef6687dcf13f&page=1&pageSize=${this.props.pageSize}`;
    //let data = await fetch(url);
    //let parsedData = await data.json();
    //console.log(parsedData);
    //this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults }); 
    this.updateNews()

  }
  
  handlePreviousClick= async ()=>{
    ////console.log("Previous");
    ////let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3e268e40ce3e423a9727ef6687dcf13f&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    ////this.setState({loading: true});
    ////let data = await fetch(url);
    ////let parsedData = await data.json();
//////
//    ////this.setState({
//    ////  page: this.state.page-1,
    ////  articles: parsedData.articles,
    ////  loading: false
//
    //})
    this.setState({page: this.state.page - 1});
    this.updateNews()

  }

  handleNextClick= async ()=>{
    if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){

    //  console.log("Next");
    //  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3e268e40ce3e423a9727ef6687dcf13f&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    //  this.setState({loading: true});
    //  let data = await fetch(url);
    //  let parsedData = await data.json();
//
    //  this.setState({
    //    page: this.state.page+1,
    //    articles: parsedData.articles,
    //    loading: false
//
    //})
    this.setState({page: this.state.page + 1});
    this.updateNews()
    
  }
  }



  render() {
    console.log('render');
    return (
      <div className='container my-3'>
        <h1 className="text-center" style={{margin : '35px 0px'}}>NewsFlix - Top Headlines</h1>
        {this.state.loading && <Spinner/>}
        <div className="row">
        {this.state.articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>
          <NewsItem title={element.title?element.title.slice(0, 45):""} description={element.description?element.description.slice(0, 100):""} imgurl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
          </div>
        })}
        </div>

        <div className="container d-flex justify-content-between">
        <button style={{margin: '25px 0px'}} disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
        <button style={{margin: '25px 0px'}} disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/21)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>

      </div>

    )
  }
}

export default News