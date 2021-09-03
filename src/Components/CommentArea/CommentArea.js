import React, { Component } from 'react';
import CommentBox from '../CommentBox/CommentBox';
import Comment from '../Comment/Comment';
import * as moment from 'moment';
import 'moment/locale/ru';


let commentCounter = 3;

export default class CommentArea extends Component {
    constructor() {
        super();
        this.state = {
            commentValue: '',
            commentLine: [{ 
                commentId:'0', 
                user: 'Самуил', 
                date: '13 октября 2011', 
                text: 'Привет, Верунь! ниче себе ты крутая. фотка класс!!!! ' },
                {
                commentId:'1', 
                user: 'Лилия Семёновна', 
                date: '14 октября 2011', 
                text: 'Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент, это и есть всемирно известный центр огранки алмазов и торговли бриллиантами?' },
                {
                commentId:'2', 
                user: 'Лилия Семёновна', 
                date: '14 октября 2011', 
                text: 'Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент?' }      
            ],
            
        };
    }

    setDateNow = () => {
        return moment().locale('ru').format('D MMMM YYYY')
    }

    setCommentLine = () => {
        let date = this.setDateNow();
        this.setState({
        commentLine: [
        ...this.state.commentLine,
        { commentId: commentCounter++, user: 'Мария Ветхова', date: date, text: this.state.commentValue }],
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
    };

    enterCommentLine = (e) => {
        if (e.charCode===13 && e.ctrlKey) {
        this.setCommentLine();
        }
    };

    render() {
        return (
            <div className='comments__container'>
                <div className='container'>
                    <Comment comments={ this.state.commentLine}/>
                </div>  
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
