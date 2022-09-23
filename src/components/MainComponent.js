import React, { Component } from 'react';
import {Navbar,NavbarBrand} from 'reactstrap'
import Menu from './MenuComponent';
import DishDetail from "./DishDetalComponent";
import {DISHES} from '../shared/dishes';


class Main extends Component {
  constructor(props) {
    super(props);
    this.state= {dishes: DISHES,
                 selectedDish: null
                };
  }

  onDishSelect(dishId){
    this.setState({selectedDish: dishId});
  }

  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className='container'>
            <NavbarBrand href='/'> Cat </NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
        <DishDetail sdish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
      </div>
    );
  }
}

export default Main;











/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */