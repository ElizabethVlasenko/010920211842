import React, { Component } from 'react'

export default class Comment extends Component {

    render() {
        const commentLine = this.props.comments.map((val) => {return <li className='each-comment' key={val.commentId}>{val.text}</li>})

        return (
            <ul className='comments-list'>
            {commentLine}
        </ul>
        )
    };
}
