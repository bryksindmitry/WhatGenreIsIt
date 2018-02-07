import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Item from '../Item';
import {arts} from '../../fixture'

export default class Grid extends Component {
    render(){
        console.log(arts)
        const ArrayItems = arts.map(data => <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2"><Item key={data.id} art={data}/></div>)
        return(
            <div className="row justify-content-around">
                    {ArrayItems}
            </div>
        )
    }
}