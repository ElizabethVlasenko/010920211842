import React, { Component } from 'react'

export default class Comment extends Component {

    render() {
        const commentLine = this.props.comments.map((comment) => {
            return <li 
                className='comment__item' 
                key={comment.commentId}
                >
                    <h4>{comment.user}</h4>
                    <p>{comment.date}</p>
                    <div>{comment.text}</div>
                </li>})

        return (
            <ul className='comments__list'>
            {commentLine}
        </ul>
        )
    };
}
