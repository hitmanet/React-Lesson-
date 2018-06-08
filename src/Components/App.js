import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ArticleList from './ArticleList'
import ArticleChart from './ArticleCharts'
import UserForm from './UserForm'
import Select from 'react-select'
import { articles } from '../fixtures'
import 'react-select/dist/react-select.css'
import Filters from './Filters'
import store from '../store'
import Counter from './Counter'

class App extends Component{

    static propTypes = {

    };


    render(){
        const {articles} = this.props
        return(
            <div>
                {/* <Counter counter = {0}/> */}
                <UserForm/>
                <Filters articles = {articles}/>
                <ArticleList articles = {this.props.articles}/>
                <ArticleChart articles = {this.props.articles}/>
            </div>
        )
    }

    

   

}

export default App

