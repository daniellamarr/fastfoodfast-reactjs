/* eslint-disable no-plusplus */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCartItems } from '../actions/cartActions';

/**
 * Cart
 */
export class Cart extends Component {
  /**
   * Constructor
   */
  constructor() {
    super();

    this.state = {
      items: [],
    };
  }

  /**
   * Initialized functions for component
   * @returns {null} null
   */
  componentDidMount() {
    this.props.getCartItems();
  }

  /**
   * @returns {null} null
   */
  getCartItems() {
    const items = JSON.parse(localStorage.getItem('items'));
    this.setState({ items });
  }

  /**
   * @returns {JSX} jsx
   */
  render() {
    return (
      <div>
        <ul>
        {
          this.props.cart.cart.map((item) => {
            return (
              <li key={item.id}>
                <a href={`menu/${item.id}`}>
                  <img src={item.image} alt=""/>
                  <p className="cart-title">
                    {item.title}
                  </p>
                  <p>
                    {`${item.quantity} x ${item.price}`}
                  </p>
                </a>
              </li>
            );
          })
        }
        </ul>
      </div>
    );
  }
}

Cart.propTypes = {
  getCartItems: PropTypes.func.isRequired,
  cart: PropTypes.shape({
    cart: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
    })),
    noOfItems: PropTypes.number,
  }),
};

export const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(mapStateToProps, { getCartItems })(Cart);
