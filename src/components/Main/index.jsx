import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Search from '../Search'
import Grid from '../Grid';

export default class Main extends Component {
  static PropTypes = {

  }

  handleValue() {
    console.log(this);
  }
  render() {
      return(<div className="container">
        <Search/>
        <Grid />
      </div>)
    }
}
