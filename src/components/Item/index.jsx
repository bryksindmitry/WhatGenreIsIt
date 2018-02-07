import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'

class Item extends Component {
    render(){
        const {art} = this.props;
        return(
            <div>
                <div className="item">
                    <div className="item__image">
                        <img src={art.img}/>
                        <p className="item__description">{art.description}</p>
                    </div>
                    <a  href="#" className="item__title">{art.title}</a>
                </div>
            </div>
        )
    }
}


export default Item