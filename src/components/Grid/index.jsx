import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Item from '../Item';
import { connect } from 'react-redux';

class Grid extends Component {
  render() {
    const {arts} = this.props;
    const ArrayItems = arts.map(data => <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2"><Item key={data.id} art={data} /></div>);
    return (
          <div className="row justify-content-around">
              {ArrayItems}
            </div>
    );
  }
}
const mapStateToProps = (state) => ({
       arts: state.arts
    });

export default connect(mapStateToProps)(Grid);
