import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import Header from './components/Header';
import Footer from './components/Footer';
import Container from './routes';
import store from './store';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {}
  }

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
    )
  }
}
