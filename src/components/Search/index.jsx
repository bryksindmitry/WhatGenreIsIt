import React, { Component } from 'react';
import PropsTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import Input from './Input';
import Button from './Button';
import './style.css';

const style = {
  height: 100,
  marginTop: 20,
  marginBottom: 20,
  textAlign: 'center',
};

export default class Search extends Component {
  render() {
    return (
      <div className="row">
      <Paper className=" search-panel" style={style} zDepth={1}>
       <div className="col-xs-12 col-sm-6 col-md-10 search-panel__input">
          <Input/>
        </div>
       <div className="col-xs-6 col-md-1 search-panel__button">
       <Button/>
        </div>
     </Paper></div>);
  }
}
