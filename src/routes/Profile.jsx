/* eslint-disable no-script-url */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loader from '../components/Loader.jsx';
import { userData } from '../actions/authActions';
import { getAllOrders } from '../actions/orderActions';

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
    this.props.getAllOrders();
  }

  /**
   * @returns {JSX} jsx
   */
  render() {
    const userDetails = this.props.auth.user;
    const orders = this.props.orders.orders.map((order) => {
      let meal = '';
      // eslint-disable-next-line arrow-body-style
      meal += order.food.map((foodData) => {
        return `${foodData.orderid} - ${foodData.quantity}\n`;
      });
      return (
        <tr key={order.id}>
          <td>{`Order ${order.id}`}</td>
          <td>
            <a
              className="default-text"
              href="javascript:;"
            >
              {meal}
            </a>
          </td>
          <td>{order.price}</td>
          <td>{order.status}</td>
        </tr>
      );
    });
    return (
      <div>
        <div className="profileLoader">
          { this.props.orders.orderStatus ? <Loader /> : null }
        </div>
        <section id="profile">
          <div className="profile-details">
            <h3 className="userFullName">
              {userDetails ? userDetails.user.name : null}
            </h3>
            <br />
            <h4 className="userEmail">
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
                <tbody id="userorders">
                  {orders}
                </tbody>
              </table>
            </div>
          </div>
          <div className="clear"></div>
        </section>
        <div className="error hide"></div>
      </div>
    );
  }
}

Profile.propTypes = {
  userData: PropTypes.func.isRequired,
  getAllOrders: PropTypes.func.isRequired,
  auth: PropTypes.shape({
    user: PropTypes.object,
  }),
  orders: PropTypes.shape({
    orders: PropTypes.array,
    orderStatus: PropTypes.bool,
  }),
};

export const mapStateToProps = state => ({
  auth: state.auth,
  orders: state.orders,
});

export default connect(mapStateToProps, { userData, getAllOrders })(Profile);
