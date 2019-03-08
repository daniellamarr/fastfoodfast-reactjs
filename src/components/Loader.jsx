import React, { Component } from 'react';

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
          <img src="/images/loader.gif" alt="loading..." width="80px" />
        </center>
      </div>
    );
  }
}
