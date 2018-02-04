import React, { Component } from 'react'
import TextField from 'material-ui/TextField';

export default class Input extends Component {
    constructor(){
      super()
      this.state = {
        value : ''
      }
    }
  handleChangeField = (val,newValue) =>{
    this.setState({
      value:newValue
    })
  }

  render(){
      return(
        <TextField onChange={this.handleChangeField} value={this.state.value} fullWidth = {true} hintText="What do you what to find ?" />
      )
  }
}
