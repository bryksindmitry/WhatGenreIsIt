import React, { Component } from 'react';
import PropsTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class Search extends Component {
  render() {
    return (<div className="container">
      <div className="row">
        <div className="col-xs-12 col-md-8" >
            <TextField hintText="Hint Text" />
          </div>
        <div className="col-xs-6 col-md-4">
            <RaisedButton label="Default" />
          </div>
      </div>
            </div>);
  }
}
