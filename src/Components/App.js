import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ArticleList from './ArticleList'
import ArticleChart from './ArticleCharts'

class App extends Component{

    static propTypes = {

    };

    render(){
        return(
            <div>
                <ArticleList articles = {this.props.articles}/>
                <ArticleChart articles = {this.props.articles}/>
            </div>
        )
    }

}

export default App