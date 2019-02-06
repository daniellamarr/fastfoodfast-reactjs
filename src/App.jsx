import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Container from './routes';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Container />
          <Footer />
        </div>
      </Router>
    )
  }
}