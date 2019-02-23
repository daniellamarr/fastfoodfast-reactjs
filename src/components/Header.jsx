import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userData } from '../actions/authActions';
import { onToggle, shoppingCart } from '../utils/utilityScript';

export class Header extends React.Component {
  constructor() {
    super();
    this.state = {}
  }

  componentDidMount() {
    this.props.userData();
    onToggle('toggle', 'dropdown');
    shoppingCart();
  }

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
              userDetails ?
              <ul className="s-hide">
                <li>
                  <a
                    href="javascript:;"
                    id="shoppingcart-b"
                    className="shoppingcart-b"
                  >
                    <i className="ti-shopping-cart"></i>
                    <sup>
                      <span className="badge itemsincart">0</span>
                    </sup>
                  </a>
                </li>
                <li className="user-logout">
                  <a href="profile.html"><i className="ti-user"></i></a>
                </li>
                <li className="user-logout">
                  <a href="javascript:;" className="logout"><i className="ti-power-off"></i></a>
                </li>
              </ul>:
              <ul className="s-hide">
                <li>
                  <a
                    href="javascript:;"
                    id="shoppingcart-b"
                    className="shoppingcart-b"
                  >
                    <i className="ti-shopping-cart"></i>
                    <sup>
                      <span className="badge itemsincart">0</span>
                    </sup>
                  </a>
                </li>
                <li className="user-login"><Link to="/login">Login</Link></li>
                <li className="user-login"><Link to="/signup">Sign Up</Link></li>
              </ul>
            }
            <div id="shoppingcart" className="cart-div hide">
              <p>You have <span className="itemsincart">0</span> item(s)</p>
              <ul className="cart-details">
                <div id="cart-details"></div>
                <li>
                  <a href="order.html"><button>View Cart</button></a>
                </li>
                <div className="clear"></div>
              </ul>
            </div>
            <ul className="l-hide">
              <li>
                <a href="javascript:;" id="shoppingcart-b" className="shoppingcart-b"><i className="ti ti-shopping-cart"></i><sup className="itemsincart">0</sup></a>
              </li>
              <li className="">
                <a href="javascript:;" className="menu" id="toggle"><i className="ti ti-menu"></i></a>
                <div className="dropdown hide" id="dropdown">
                  {
                    userDetails ?
                    <ul>
                      <li className="user-logout"><a href="profile.html">Profile</a></li>
                      <li className="user-logout"><a href="javascript:;" className="logout">Logout</a></li>
                    </ul>:
                    <ul>
                      <li className="user-login"><Link to="/login">Login</Link></li>
                      <li className="user-login"><Link to="/signup">Sign Up</Link></li>
                    </ul>
                  }
                </div>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { userData })(Header);
