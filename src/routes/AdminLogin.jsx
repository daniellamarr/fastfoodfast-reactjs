import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { adminLogin } from '../actions/authActions';
import Loader from '../components/Loader.jsx';

/**
 * Login
 */
export class AdminLogin extends Component {
  /**
   * Constructor
   */
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
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

    this.props.adminLogin({
      email: this.state.email,
      password: this.state.password,
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
            <h4>This authentication page is reserved only for Admin</h4>
              <form id="adminLoginForm" method="post" onSubmit={this.onSubmit}>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
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
                <button type="submit">Sign in </button>
              </form>
            </div>
          </center>
        </section>
        <div className="error hide"></div>
      </div>
    );
  }
}

AdminLogin.propTypes = {
  auth: PropTypes.shape({
    loadingStatus: PropTypes.bool.isRequired,
  }),
  adminLogin: PropTypes.func.isRequired,
};

export const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { adminLogin })(AdminLogin);
