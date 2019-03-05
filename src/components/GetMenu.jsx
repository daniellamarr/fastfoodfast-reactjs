import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAllMenu } from '../actions/Menu';

/**
 * GetMenu
 */
export class GetMenu extends React.Component {
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
          <a href={`menu.html#menu_${menuItem.id}`}>
            {menuItem.title}
            <h5 className="price">N{menuItem.price}</h5>
          </a>
          <div className="price-tag">
            <input
              type="number"
              id={`qty${menuItem.id}`}
              className="quantityField"
              defaultValue="1"
            />
            <br /><br />
            <button className="addtocart">
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
            <img src="images/loader.gif" alt="loading..." width="100px" />
          </center>
        }
      </div>
    );
  }
}

GetMenu.propTypes = {
  getAllMenu: PropTypes.func.isRequired,
  menuItems: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  })),
  menuStatus: PropTypes.bool.isRequired,
};

export const mapStateToProps = state => ({
  menuItems: state.menus.menus,
  menuStatus: state.menus.menuStatus,
});

export default connect(mapStateToProps, { getAllMenu })(GetMenu);
