import React, { Component } from 'react'
import '../index.css'

export default class NewsItem extends Component {


    

    render() {
        let {title,description, imgurl,newsUrl} = this.props
        return (
            <div>
                <div className="card" style={{width: '100%'}}> 
                    <img src={imgurl}  className="card-img-top photo" alt=""/>
                        <div className="card-body">
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text">{description}...</p>
                            <a  href={newsUrl} target='_blank'  className="btn btn-sm btn-primary" rel="noreferrer">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}
