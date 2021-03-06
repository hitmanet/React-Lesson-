import React, {Component, PureComponent} from 'react';
import PropTypes from 'prop-types'
import CommentList from "./CommentList";
import toggleOpen from '../Decorators/toggleOpen'
import { CSSTransitionGroup } from 'react-transition-group'
import './article.css'

class Article extends PureComponent{
    static propTypes ={
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string
        }).isRequired,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    };

    componentWillReceiveProps(nextProps){
        console.log('update', this.props.isOpen, nextProps.isOpen);
    }



    componentWillMount(){
       console.log('mounting');
    }


    render(){
        const {article, isOpen, toggleOpen} = this.props;

        return(
            <div ref = {this.setContainerRef}>
                <h3>{article.title}</h3>
                    <button onClick={toggleOpen}>
                    {isOpen ? 'close' : 'open'}
                    </button>
                    <CSSTransitionGroup
                        transitionName="article"
                        transitionEnterTimeout={300}
                        transitionLeaveTimeout={500}>
                        {this.getBody()}
                   </CSSTransitionGroup>
            </div>
        )
    }

    setContainerRef = ref =>{
        this.container = ref;
        console.log(ref)
    };

    componentDidMount(){
        console.log('mounted')
    }

    /*shouldComponentUpdate(nextProps, nextState){
        return nextProps.isOpen !== this.props.isOpen
    }*/

    getBody(){
        const {article, isOpen} = this.props;
        if (!isOpen) return null;
        return (
        <section>
            {article.text}
            <CommentList  comments = {article.comments} ref={this.setCommentRef}/>
        </section>
        );
    };

    setCommentRef = ref =>{
        console.log(ref)
    }


}

export default toggleOpen(Article)



/*
export default function Article(props){
    const {article}  = props;
    return(
        <div>
            <h3>{article.title}</h3>
            <button></button>
            <section>{article.text}</section>
        </div>
    )

}*/