import React, { Component } from 'react'
import NewsItem from './NewsItem'


export default class News extends Component {

    articles =[]

    constructor()
    {   super();
        this.state = {
            articles :this.articles,
            loading :false

        }
    }


    async componentDidMount()
    {
        let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=d1c11ca1177a49539d76a9587eb9c3ea"
        let data = await fetch(url)
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({articles: parsedData.articles})
        
    }
    render() {
        return (
            <div className='container my-3'>

                <h2>Top Headline News - News World</h2>

                <div className='row my-3' >
                    {this.state.articles.map((element)=>
                    {   
                        return <div className='col-md-3 py-4' key={element.url} >    
                        <NewsItem  title={element.title? element.title.slice(0,30):" "} description= {element.description? element.description.slice(0,80):""}imgurl={element.urlToImage} newsUrl= {element.url}  />
                    </div>
                    })}
                    
                </div>
                

            </div>
        )
    }
}
