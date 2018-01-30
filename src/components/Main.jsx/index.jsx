import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Search from '../Search'

export default class Main extends Component {
  static PropTypes = {

  }

  handleValue() {
    console.log(this);
  }
  render() {
      return(<div>
        <Search/>
      </div>)
    }
}
