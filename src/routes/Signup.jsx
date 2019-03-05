import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { userSignup } from '../actions/authActions';
import Loader from '../components/Loader.jsx';

/**
 * Signup
 */
export class Signup extends Component {
  /**
   * Constructor
   */
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      phone: '',
      address: '',
      password: '',
      cpassword: '',
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  /**
   * onChange
   * @param {object} e
   * @returns {null} null
   */
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  /**
   * onSubmit
   * @param {object} e
   * @returns {null} null
   */
  onSubmit(e) {
    e.preventDefault();

    this.props.userSignup({
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      address: this.state.address,
      password: this.state.password,
      cpassword: this.state.cpassword,
    });
  }

  /**
   * @returns {JSX} jsx
   */
  render() {
    return (
      <div id="loginPage">
        { this.props.auth.loadingStatus ? <Loader /> : null }
        <section id="login">
          <center>
            <div className="login">
              <h4>Quench your hunger, Sign up today</h4>
              <form id="signupForm" method="post" onSubmit={this.onSubmit}>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Firstname"
                  onChange={this.onChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  onChange={this.onChange}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Phone Number"
                  onChange={this.onChange}
                  required
                />
                <input
                  type="tel"
                  name="address"
                  id="address"
                  placeholder="Location"
                  onChange={this.onChange}
                  required
                />
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  onChange={this.onChange}
                  required
                />
                <input
                  type="password"
                  name="cpassword"
                  id="cpassword"
                  placeholder="Password"
                  onChange={this.onChange}
                  required
                />
                <button type="submit">Sign up </button>
              </form>
            </div>
          </center>
        </section>
        <div className="error hide"></div>
      </div>
    );
  }
}

Signup.propTypes = {
  auth: PropTypes.shape({
    loadingStatus: PropTypes.bool.isRequired,
  }),
  userSignup: PropTypes.func.isRequired,
};

export const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { userSignup })(Signup);
