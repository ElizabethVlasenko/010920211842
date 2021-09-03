import React, { Component } from 'react';
import './CommentBox.css';

export default class CommentBox extends Component {
    render() {

        const { commentValue, handleCommentValue, 
            enterCommentLine, submitCommentLine} = this.props;
        const enableCommentButton = () => {
            return (commentValue ? false : true);
        }
        
        return (
            <div className='comments__box'>
                <div className='container'>
                    <textarea  
                        onKeyPress={enterCommentLine} 
                        value={commentValue}
                        id='comments__input' 
                        onChange={handleCommentValue}
                        type='text' 
                    />
                </div>
                    <button 
                        onClick={submitCommentLine} 
                        type='submit' 
                        className='comments__button'
                        id={
                            commentValue 
                            ? 'comments__button_enabled' 
                            : 'comments__button_disabled'}
                        disabled={enableCommentButton()}
                    >Написать консультанту</button>
            </div>
        )
    }
}
