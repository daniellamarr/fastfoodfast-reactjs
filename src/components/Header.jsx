/* eslint-disable no-script-url */
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { userData } from '../actions/authActions';
import { onToggle, shoppingCart } from '../utils/utilityScript';
import Cart from './Cart.jsx';
import { getCartItems } from '../actions/cartActions';

/**
 * Header
 */
export class Header extends React.Component {
  /**
   * Initialized functions for component
   * @returns {null} null
   */
  componentDidMount() {
    this.props.userData();
    this.props.getCartItems();
    onToggle('toggle', 'dropdown');
    shoppingCart();
  }

  /**
   * @returns {JSX} jsx
   */
  render() {
    const userDetails = this.props.auth.user;
    return (
      <div>
        <header id="home-header">
          <div className="logo">
            <h1><a href="index.html">Fast-Food-Fast</a></h1>
          </div>
          <nav>
            {
              userDetails
                ? <ul className="s-hide">
                <li>
                  <a
                    href="javascript:;"
                    id="shoppingcart-b"
                    className="shoppingcart-b"
                  >
                    <i className="ti-shopping-cart"></i>
                    <sup>
                      <span className="badge itemsincart">
                        {this.props.cart.noOfItems}
                      </span>
                    </sup>
                  </a>
                </li>
                <li>
                  <Link to="/profile"><i className="ti-user"></i></Link>
                </li>
                <li>
                  <a href="javascript:;" className="logout">
                    <i className="ti-power-off"></i>
                  </a>
                </li>
              </ul>
                : <ul className="s-hide">
                <li>
                  <a
                    href="javascript:;"
                    id="shoppingcart-b"
                    className="shoppingcart-b"
                  >
                    <i className="ti-shopping-cart"></i>
                    <sup>
                      <span className="badge itemsincart">
                        {this.props.cart.noOfItems}
                      </span>
                    </sup>
                  </a>
                </li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Sign Up</Link></li>
              </ul>
            }
            <div id="shoppingcart" className="cart-div hide">
              <p>You have&nbsp;
                <span className="itemsincart">
                  {this.props.cart.noOfItems}
                </span>
                &nbsp;item(s)
              </p>
              <ul className="cart-details">
                <Cart />
                <li>
                  <a href="order.html"><button>View Cart</button></a>
                </li>
                <div className="clear"></div>
              </ul>
            </div>
            <ul className="l-hide">
              <li>
                <a
                  href="javascript:;"
                  id="shoppingcart-b"
                  className="shoppingcart-b"
                >
                  <i className="ti ti-shopping-cart"></i>
                  <sup className="itemsincart">
                    {this.props.cart.noOfItems}
                  </sup>
                </a>
              </li>
              <li className="">
                <a href="javascript:;" className="menu" id="toggle">
                  <i className="ti ti-menu"></i>
                </a>
                <div className="dropdown hide" id="dropdown">
                  {
                    userDetails
                      ? <ul>
                      <li>
                        <Link to="/profile">Profile</Link>
                      </li>
                      <li>
                        <a href="javascript:;" className="logout">Logout</a>
                      </li>
                    </ul>
                      : <ul>
                      <li><Link to="/login">Login</Link></li>
                      <li><Link to="/signup">Sign Up</Link></li>
                    </ul>
                  }
                </div>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}

Header.propTypes = {
  userData: PropTypes.func.isRequired,
  getCartItems: PropTypes.func.isRequired,
  auth: PropTypes.shape({
    user: PropTypes.object,
  }),
  cart: PropTypes.shape({
    cart: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
    })),
    noOfItems: PropTypes.number,
  }),
};

export const mapStateToProps = state => ({
  auth: state.auth,
  cart: state.cart,
});

export default connect(mapStateToProps, { userData, getCartItems })(Header);
