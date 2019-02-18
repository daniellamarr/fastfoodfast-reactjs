import React, { Component } from 'react';

export default class Loader extends Component {
  render() {
    return (
      <div id="loader">
        <center>
          <img src="images/loader.gif" alt="loading..." width="80px" />
        </center>
      </div>
    )
  }
}
