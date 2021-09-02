import React, { Component } from 'react';
import './Profile.css';

export default class Profile extends Component {
    render() {
        return (
            <div className={'profile'}>
                <div className={'container'}>
                    <img 
                        src={this.props.img} 
                        alt={'Profile'} 
                        className={'profile__image'}
                    />
                    <h4 className={'profile__name'}>{this.props.name}</h4>
                    <h6 className={'profile__about'}>{this.props.about}</h6>
                    <p className={'profile__message'}>{this.props.message}</p>
                </div>
            </div>
        )
    }
}
