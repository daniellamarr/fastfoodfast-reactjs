import React, { Component } from 'react';

const loader = require('../../public/images/loader.gif');

/**
 * Loader
 */
export default class Loader extends Component {
  /**
   * @returns {JSX} jsx
   */
  render() {
    return (
      <div id="loader">
        <center>
          <img src={loader} alt="loading..." width="80px" />
        </center>
      </div>
    );
  }
}
