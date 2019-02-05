import React from 'react';

export default class Header extends React.Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return (
      <div>
        <header id="home-header">
          <div className="logo">
            <h1><a href="index.html">Fast-Food-Fast</a></h1>
          </div>
          <nav>
            <ul className="s-hide">
              <li>
                <a href="javascript:;" id="shoppingcart-b" className="shoppingcart-b"><i className="ti-shopping-cart"></i> <sup><span className="badge itemsincart">0</span></sup></a>
              </li>
              <li className="user-logout">
                <a href="profile.html"><i className="ti-user"></i></a>
              </li>
              <li className="user-logout">
                <a href="javascript:;" className="logout"><i className="ti-power-off"></i></a>
              </li>
              <li className="user-login"><a href="login.html">Login</a></li>
              <li className="user-login"><a href="signup.html">Sign Up</a></li>
            </ul>
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
                <a href="javascript:;" className="menu" id="toggle"><i className="ti ti-user"></i></a>
                <div className="dropdown hide" id="dropdown">
                  <ul>
                    <li className="user-logout"><a href="profile.html">Profile</a></li>
                    <li className="user-logout"><a href="javascript:;" className="logout">Logout</a></li>
                    <li className="user-login"><a href="login.html">Login</a></li>
                    <li className="user-login"><a href="signup.html">Sign Up</a></li>
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    )
  }
}