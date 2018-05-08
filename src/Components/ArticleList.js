import React, {Component} from 'react'
import Article from './Article'
import {articles} from "../fixtures";


export default class ArticleList extends Component{
    state = {
        openArticleId: null
    };

    render(){
        const articleElements = articles.map((article) => <li key = {article.id}><Article
            article = {article}
            isOpen = {article.id === this.state.openArticleId}
            toggleOpen = {this.toggleOpenArticle.bind(this, article.id)}
        /></li>);
        return(
            <ul>
                {articleElements}
            </ul>
        )
    }

    toggleOpenArticle(openArticleId){
        this.setState({openArticleId})
    }



}