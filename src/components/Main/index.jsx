import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
//import Search from '../Search'
//import Grid from '../Grid';
import GridPanels from '../GridPanels'

class Main extends Component {
  static PropTypes = {

  }

  handleValue() {
    console.log(this);
  }
  render() {
      return( //<div className="container">
        <GridPanels/>
      )
     // </div>)
    }
}


export default Main 

