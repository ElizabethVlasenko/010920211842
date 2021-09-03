import React, { Component } from 'react';
import CommentBox from '../CommentBox/CommentBox';
import Comment from '../Comment/Comment';

let commentCounter = 1;

export default class CommentArea extends Component {
    constructor() {
        super();
        this.state = {
        commentValue: '',
        commentLine: [{ commentId:'0', text: '', }],
          };
    }

    setCommentLine = () => {
        this.setState({
        commentLine: [
        ...this.state.commentLine,
        { commentId: commentCounter++, text: this.state.commentValue }],
        commentValue: '',
        })
    };

    handleCommentValue = (e) => {
        this.setState({
        commentValue: e.target.value,
        });
    };

    submitCommentLine = (e) => {
        e.preventDefault();
        this.setCommentLine();
        console.log(this.state);
    };

    enterCommentLine = (e) => {
        if (e.charCode===13 && e.ctrlKey) {
        this.setCommentLine();
        console.log(this.state);
        }
    };

    render() {
        return (
            <div>
                <Comment comments={ this.state.commentLine}/>
                <CommentBox
                    commentValue={this.state.commentValue}
                    handleCommentValue={this.handleCommentValue}
                    enterCommentLine={this.enterCommentLine}
                    submitCommentLine={this.submitCommentLine}
                />                
            </div>
        )
    }
}
