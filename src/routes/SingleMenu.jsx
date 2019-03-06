/* eslint-disable radix */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getSingleMenu } from '../actions/Menu';
import GetMenu from '../components/GetMenu.jsx';
import { addToCart } from '../actions/cartActions';

/**
 * SingleMenu
 */
export class SingleMenu extends Component {
  /**
   * Constructor
   */
  constructor() {
    super();

    this.state = {
      quantity: 1,
    };

    this.onChange = this.onChange.bind(this);
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
   * @returns {null} null
   */
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getSingleMenu(id);
  }

  /**
   * @returns {JSX} jsx
   */
  render() {
    return (
      <div>
        {
          this.props.menuStatus
        }
        <section
          id="menudetails"
          style={{
            backgroundImage: `url(${this.props.menu.image_path})`,
          }}
        >
          <div className="title">
            <h1>
              {this.props.menu.title}
            </h1>
            <h2>
              N{this.props.menu.price}
            </h2>
            <p>
            {this.props.menu.quantity} item(s) remaining in stock
            </p>
            <input
              type="number"
              id={`qty${this.props.menu.id}`}
              name='quantity'
              className="quantityField"
              defaultValue="1"
              min={1}
              max={10}
              onChange={this.onChange}
            />
            <button
              onClick={() => this.props.addToCart({
                id: this.props.menu.id,
                title: this.props.menu.title,
                quantity: parseInt(this.state.quantity),
                price: this.props.menu.price,
                image: this.props.menu.image_path,
              })}
            >
              Add to cart
            </button>
          </div>
        </section>
        <section id="foods">
          <div className="title">
            <h2>More varieties</h2><hr className="div" />
          </div>
          <GetMenu />
        </section>
      </div>
    );
  }
}

SingleMenu.propTypes = {
  getSingleMenu: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }),
  menu: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.string,
    quantity: PropTypes.string,
    image_path: PropTypes.string,
  }),
  menuStatus: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  menu: state.menus.menu,
  menuStatus: state.menus.menuStatus,
});

export default connect(mapStateToProps,
  { getSingleMenu, addToCart })(SingleMenu);
