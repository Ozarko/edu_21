import React, { Component } from 'react';

export default class CarDetail extends Component {
  render () {
    return(
      <div style={{textAlign: 'center',}}>
        <h1>{this.props.match.params.name}</h1>
      </div>
    )
  }
}