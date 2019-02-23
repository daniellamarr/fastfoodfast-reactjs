import React from 'react';

/**
 * Footer
 */
export default class Footer extends React.Component {
  /**
   * @returns {JSX} jsx
   */
  render() {
    return (
      <div>
        <footer>
          <div>
            <p>
              <a href="index.html">Fast-Food-Fast</a>
            </p>
            <p>
              Developed by
              <a
                href="https://github.com/daniellamarr"
                rel="noopener noreferrer" target="_blank"
              >
                Daniel Lamarr
              </a>
            </p>
          </div>
        </footer>
      </div>
    );
  }
}
