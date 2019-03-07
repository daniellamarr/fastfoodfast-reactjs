import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCartItems, deleteItem } from '../actions/cartActions';
import { placeOrder } from '../actions/orderActions';

/**
 * Checkout
 */
export class Checkout extends Component {
  /**
   * Constructor
   */
  constructor() {
    super();

    this.state = {
      sumOfPrices: [],
    };
  }

  /**
   * Total Price
   * @return {number} Total Price of items in cart
   */
  totalPrice() {
    let totalPrice = 0;
    if (this.props.cart.cart.length > 0) {
      totalPrice = this.state.sumOfPrices.reduce(
        (price, quantity) => price + quantity,
      );
    }

    return totalPrice;
  }

  /**
   * @returns {JSX} jsx
   */
  render() {
    return (
      <div>
        <section id="order">
          <div className="title">
            <h1>Checkout</h1>
            <p>Place your order</p>
          </div>
        </section>
        <section id="checkout">
          <div className="table">
            <table>
              <thead>
                <tr>
                  <th>Product Image</th>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Price(N)</th>
                  <th>Total</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody id="cartorders">
                {
                  this.props.cart.cart.map((item, index) => {
                    const quantityPrice = item.price * item.quantity;
                    this.state.sumOfPrices.push(quantityPrice);
                    return (
                      <tr key={item.id}>
                        <td>
                          <img
                            src={item.image}
                            alt="Product Image"
                            width="80px"
                          />
                        </td>
                        <td>
                          {item.title}
                        </td>
                        <td>
                          {item.quantity}
                        </td>
                        <td>
                          {item.price}
                        </td>
                        <td>
                          {quantityPrice}
                        </td>
                        <td>
                        <a
                          className="red-text"
                          onClick={() => this.props.deleteItem(index)}
                        >
                          <i className="ti-close"></i>
                        </a>
                        </td>
                      </tr>
                    );
                  })
                }
                <tr className="tabletotal">
                  <td colSpan={4}>
                    Total:
                  </td>
                  <td>
                    {this.totalPrice()}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <br /><br />
          <button
            id="ordernow"
            onClick={() => this.props.placeOrder()}
            disabled={this.props.orders.loadingStatus}
          >
            {this.props.orders.loadingStatus ? 'Loading. . .' : 'Place Order'}
          </button>
        </section>
        <div className="error hide"></div>
      </div>
    );
  }
}

Checkout.propTypes = {
  getCartItems: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  placeOrder: PropTypes.func.isRequired,
  cart: PropTypes.shape({
    cart: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
    })),
    noOfItems: PropTypes.number,
    cartStatus: PropTypes.bool,
  }),
  orders: PropTypes.shape({
    loadingStatus: PropTypes.bool,
  }),
};

export const mapStateToProps = state => ({
  cart: state.cart,
  orders: state.orders,
});

export default connect(mapStateToProps,
  { getCartItems, deleteItem, placeOrder })(Checkout);
