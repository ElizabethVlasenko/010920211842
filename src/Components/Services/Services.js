import React, { Component } from 'react'
import './Servises.css';

export default class Services extends Component {
    render() {

        const serviceList = this.props.services.map((service, index)=> <div key={index} className={'services__container'}>
          
            <p className={'services__name'}>{service.name} </p>
            <p className={'services__number'}>{service.number} </p>
            <div 
                className={
                    (service.number*100/this.props.sum < 50) 
                    ? 'services__progress services__progress_blue' 
                    : 'services__progress services__progress_green'
                } 
                style={{"width" : service.number*100/this.props.sum + '%'}}
            > </div> 
        </div>);

        return (
            <div className={'container'}>
                <div className={'services'}>
                    <p className={'services__header'}>Услуг</p>
                    <hr className={'services__border'}/>
                    <div className={'services__list'}>
                        {serviceList}
                    </div>
                    <hr className={'services__border'}/>
                    <p className={'services__name services__name_bold'}>Всего</p>
                    <p className={'services__number services__number_bold'}>
                        {this.props.sum}
                    </p>
                </div>
            </div>
        )
    }
}
