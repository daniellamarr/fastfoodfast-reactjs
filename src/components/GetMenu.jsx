import React from 'react';
import Menu from '../actions/Menu';

export default class GetMenu extends React.Component {
  constructor() {
    super();
    this.state = {
      menu: [],
      menuStatus: false,
    }
  }

  async getAllMenu() {
    try {
      const response = await Menu.getAllMenu();
      const { menu } = response.data;
      this.setState({ menu, menuStatus: true })
    } catch (error) {
      console.log('Internal Server error')
    }
  }

  componentDidMount() {
    this.getAllMenu();
  }

  render() {
    return (
      <div>
        {this.state.menuStatus ? 
          this.state.menu.map((eachMenu) => {
            <div>
              <p>{eachMenu.title}</p>
            </div>
          }) :
          <center>
            <img src="images/loader.gif" alt="loading..." width="100px" />
          </center>
        }
      </div>
    )
  }
}