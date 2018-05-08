import React, { Component } from 'react'
import PropTypes from 'prop-types'


class ArticleCharts extends Component{

    static propTypes = {

    };

    componentDidMount(){
        //d3 works with this.refs.chart
    }

    componentWillReceiveProps(nextProps){
        //update articles
    }

    render(){
        return(
            <div ref = 'chart'/>
        )

    }

    componentWillUnmount(){
        //clean
    }

}

export default ArticleCharts