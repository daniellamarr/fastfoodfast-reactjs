import React from 'react';
import { connect } from 'react-redux';
import { getAllMenu } from '../actions/Menu';

class GetMenu extends React.Component {
  componentWillMount() {
    this.props.getAllMenu();
  }

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
            <input type="number" id={`qty${menuItem.id}`} className="quantityField" defaultValue="1" /><br /><br />
            <button className="addtocart">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    ));
    return (
      <div>
        {this.props.menuStatus ?
          menuItems :
          <center>
            <img src="images/loader.gif" alt="loading..." width="100px" />
          </center>
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  menuItems: state.menus.menus,
  menuStatus: state.menus.menuStatus
})

export default connect(mapStateToProps, { getAllMenu })(GetMenu);
