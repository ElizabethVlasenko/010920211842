import React, { Component } from 'react';
import './Comment.css';

export default class Comment extends Component {

    render() {
        const commentLine = this.props.comments.map((comment) => {
            return <li 
                className='comment__item' 
                key={comment.commentId}
                >
                    <h4 className='item__header'>{comment.user}</h4>
                    <p className='item__date'>{comment.date}</p>
                    <div className='item__text'>{comment.text}</div>
                </li>})

        return (
            <ul className='comments__list'>
            {commentLine}
        </ul>
        )
    };
}
