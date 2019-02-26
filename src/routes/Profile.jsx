import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { userData } from '../actions/authActions';

/**
 * Profile
 */
export class Profile extends Component {
  /**
   * Initialized functions for component
   * @returns {null} null
   */
  componentDidMount() {
    this.props.userData();
  }

  /**
   * @returns {JSX} jsx
   */
  render() {
    const userDetails = this.props.auth.user;
    return (
      <div>
        <section id="profile">
          <div className="profile-details">
            <h3>
              {userDetails ? userDetails.user.name : null}
            </h3>
            <br />
            <h4>
              {userDetails ? userDetails.user.email : null}
            </h4>
          </div>
          <div className="profile">
            <center>
              <div className="profileImage" />
            </center>
          </div>
        </section>
        <section id="profile-bar" />
        <section id="profile-section">
          <div className="profileOrders">
            <center>
              <h3>Your Orders</h3>
            </center>
            <div className="table">
              <table className="order-table">
                  <thead>
                    <tr>
                      <th>S/N</th>
                      <th>Products</th>
                      <th>Price(N)</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody id="userorders"></tbody>
              </table>
            </div>
          </div>
          <div className="clear"></div>
        </section>
      </div>
    );
  }
}

Profile.propTypes = {
  userData: PropTypes.func.isRequired,
  auth: PropTypes.shape({
    user: PropTypes.object,
  }),
};

export const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { userData })(Profile);
