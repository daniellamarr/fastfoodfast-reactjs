import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Container from './routes/index.jsx';
import store from './store';

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
        <Provider store={store}>
          <div>
            <Header />
            <Container />
            <Footer />
          </div>
        </Provider>
      </Router>
    );
  }
}
