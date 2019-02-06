import React from 'react';
import ReactDOM from 'react-dom';

export default class Footer extends React.Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return (
      <div>
        <footer>
          <div>
            <p><a href="index.html">Fast-Food-Fast</a></p>
            <p>Developed by <a href="https://github.com/daniellamarr" target="_blank">Daniel Lamarr</a></p>
          </div>
        </footer>
      </div>
    )
  }
}