import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';


export default class Buttron extends Component{
    render(){
        return(
            <div>
                <RaisedButton label="Search" />
            </div>
        )
    }
}