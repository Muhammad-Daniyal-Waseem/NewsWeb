import Navbar from './Components/Navbar';
import News_section from './Components/News_section';
import News_items from './Components/News_items';

import './App.css';


import React, { Component } from 'react'


export default class App extends Component {
    
       constructor()
      {
        super();
    
        this.state={
          articles: [],
          loading:false,
          page:1,

        }



      }
    
    
async componentDidMount()
{
  let url="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ba08d939814648d1816a103b5efbba52&page=1&pageSize=20";
  let data= await fetch(url);
    let Parseddata= await data.json();
    this.setState({articles: Parseddata.articles,tottalaerticles:Parseddata.totalResults});
 
}


handle_N=async()=>
{

  let url=`https://newsapi.org/v2/everything?q=tesla&from=2023-08-01&sortBy=publishedAt&apiKey=ba08d939814648d1816a103b5efbba52&page=${this.state.page+1}&pageSize=20`;
  let data= await fetch(url);
    let Parseddata= await data.json();
  
  
    this.setState({
      page:this.state.page+1,
      articles: Parseddata.articles
    })
  
}

handle_P= async()=>{


let url=`https://newsapi.org/v2/everything?q=tesla&from=2023-08-01&sortBy=publishedAt&apiKey=ba08d939814648d1816a103b5efbba52&page=${this.state.page-1}&pageSize=20`;
let data= await fetch(url);
  let Parseddata= await data.json();


  this.setState({
    page:this.state.page-1,
    articles: Parseddata.articles,
  
  })

  
}



render() {
  return (
    
      <div className='container my-3'>
      <Navbar></Navbar>
      <News_section></News_section>


<div className="row">

{this.state.articles ? (
  this.state.articles.map((element) => {
    return (
      <div className="col-md-4" key={element.url ? element.url : ""}>
        <News_items
          url={element.url ? element.url : ""}
          title={element.title ? element.title : "Title"}
          description={element.description ? element.description : "Decsription"}
          ImageUrl={element.urlToImage}
        />
      </div>
    );
  })
) : (
  <p>Loading...</p>
)}


<div className="container d-flex justify-content-between">
      <button type="button"  disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handle_P}>&larr; Previous</button>
      <button type="button" disabled={this.state.page+1>Math.ceil(this.state.totalResults/20)} className="btn btn-dark" onClick={this.handle_N}>Next &rarr;</button>
      </div>
     
  
    
    </div>
     
      
      </div>
    )
  }
}



