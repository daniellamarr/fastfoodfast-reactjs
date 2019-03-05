import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Container from './routes/index.jsx';

/**
 * App
 */
export default class App extends React.Component {
  /**
   * @returns {JSX} jsx
   */
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Container />
          <Footer />
        </div>
      </Router>
    );
  }
}
