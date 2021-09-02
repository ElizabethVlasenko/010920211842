import React, { Component } from 'react'
import './AllReviews.css'
import likeImage from '../../Assets/like.png';
import commentImage from '../../Assets/comment.png';

export default class AllReviews extends Component {
    render() {
        return (
            <div className={'all-reviews container'}>
                <div className={'all-reviews__container'}>
                    <p className={'all-reviews__text'} >Последние отзывы</p>
                    <a className={'all-reviews__link'} href={'index.html'}>Все отзывы</a>
                </div>
                <div className={'all-reviews__icons'}>
                    <img 
                        src={likeImage} 
                        alt={'Like'}
                        className={'all-reviews__like all-reviews__icon'}
                    />
                    <p className={'all-reviews__like-number'}>131</p>
                    <img 
                        src={commentImage}
                        alt={'Comment'}
                        className={'all-reviews__comment all-reviews__icon'}
                    />
                    <p className={'all-reviews__comment-number'}>14</p>                    
                </div>
            </div>
        )
    }
}
