import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import Panel from '../Panel';
import './style.css'


class GridPanels extends Component {
  static PropTypes = {

  }
  state ={
      open: null
  }

  render() {
      const {open} = this.state;
      const {genres} = this.props;
      let panels = [];
      for(let i in genres){
        panels.push(i)
      }
      return(<div className="panels">
        {panels.map(item=><Panel key={item} setOpenClass={this.setOpenClass} className={open != item ? `panel ${item}` : `panel ${item} open`  } name={item}/>)}
      </div>)
    }

    setOpenClass = item => e =>{
        this.setState({
            open:item
        })
    }

}


const MapStateToProps = state =>({
  genres: state.genres
})
export default connect(MapStateToProps)(GridPanels) 

