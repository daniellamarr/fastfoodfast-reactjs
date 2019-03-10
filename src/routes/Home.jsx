import React from 'react';
import GetMenu from '../components/GetMenu.jsx';

/**
 * Home
 */
export default class Home extends React.Component {
  /**
   * @returns {JSX} jsx
   */
  render() {
    return (
      <div>
        <section id="home">
          <div className="title">
            <h1>Quench The Hunger</h1>
            <h4>
              We are your one stop restaurant offering
              best meals at affordable prices
            </h4>
            <a href="/signup">
              <button>Get Started</button>
            </a>
          </div>
        </section>
        <section>
          
        </section>
        <section id="foods">
          <div className="title">
            <h2>Foods</h2><hr className="div" />
          </div>
          <div id="allmenu">
            <GetMenu />
          </div>
          <div className="clear"></div>
        </section>
        <section id="jumbotron">
          <h1>Get it here!</h1>
        </section>
      </div>
    );
  }
}
