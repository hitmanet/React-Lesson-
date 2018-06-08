import React, {Component} from 'react';
import Comment from "./Comment";
import toggleOpen from "../Decorators/toggleOpen"
import CommentForm from "./CommentForm"

 class CommentList extends Component {
    static defaultProps = {                         /*Props по умолчанию*/
        comments: []
    };



    render(){
        const text = this.props.isOpen ? 'hide' : 'open';
        return(
            <div>
                <button onClick={this.props.toggleOpen}>{text}</button>
                {this.getBody()}
                <CommentForm/>
            </div>
        )


    };
    getBody(){

        const {comments, isOpen, toggleOpen} = this.props;
        if(!isOpen) return null;
        if(!comments.length) return <p>No comments</p>;
        return(
            <ul>
                {comments.map(comment => <li key = {comment.id}><Comment comment = {comment}/></li>)}
            </ul>
        )
    }



}

export default toggleOpen(CommentList)