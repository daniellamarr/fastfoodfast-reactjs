/* eslint-disable radix */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAllMenu } from '../actions/Menu';
import { addToCart } from '../actions/cartActions';

/**
 * GetMenu
 */
class GetMenu extends React.Component {
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
   * Initialized functions for component
   * @returns {null} null
   */
  componentDidMount() {
    this.props.getAllMenu();
  }

  /**
   * @returns {JSX} jsx
   */
  render() {
    const menuItems = this.props.menuItems.map(menuItem => (
      <div key={menuItem.id} className="item">
        <img src={menuItem.image} alt="" />
        <div className="item-text">
          <a href={`/menu/${menuItem.id}`}>
            {menuItem.title}
            <h5 className="price">N{menuItem.price}</h5>
          </a>
          <div className="price-tag">
            <input
              type="number"
              id={`qty${menuItem.id}`}
              name='quantity'
              className="quantityField"
              defaultValue="1"
              min={1}
              max={10}
              onChange={this.onChange}
            />
            <br /><br />
            <button
              className="addtocart"
              onClick={() => this.props.addToCart({
                id: menuItem.id,
                title: menuItem.title,
                quantity: parseInt(this.state.quantity),
                price: menuItem.price,
                image: menuItem.image,
              })}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    ));
    return (
      <div>
        {this.props.menuStatus
          ? menuItems
          : <center>
            <img src="/images/loader.gif" alt="loading..." width="100px" />
          </center>
        }
        <div className="clear"></div>
      </div>
    );
  }
}

GetMenu.propTypes = {
  getAllMenu: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
  menuItems: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  })),
  menuStatus: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  menuItems: state.menus.menus,
  menuStatus: state.menus.menuStatus,
});

export default connect(mapStateToProps, { getAllMenu, addToCart })(GetMenu);
