import { connect } from 'react-redux';
import './App.css'
import {
  BrowserRouter as Router, 
  Route, 
  Switch
} from "react-router-dom"; 

import {logoutUser} from './Actions/userActions';
import {fetchItems} from './Actions/itemActions';
import {updateCart} from './Actions/cartActions';
import {addUser} from './Actions/userActions';
import React, { Component } from 'react';
import Home from './Containers/home'
import Navbar from './Components/navbar'
import SignupPage from './Containers/signUpPage';
import LoginPage from './Containers/logInPage';
import ItemsList from './Containers/itemsList';
import CartPage from './Containers/cartPage';
import Order from './Containers/orderPage';



class App extends Component {

  componentDidMount() {
    this.props.fetchItems();
    this.props.updateCart();
    this.props.addUser();
  }

  render() {
    return(
      <Router>
       <div className="App">
         <Navbar handleLogoutClick={this.props.handleLogoutClick} user={this.props.user} />
         <Switch>
           <Route exact path="/" component={Home} />
           <Route path="/signup" component={SignupPage} />
           <Route path="/login" component={LoginPage} />
           <Route path="/items" component={ItemsList} />
           <Route path="/cart" component={CartPage} />
           <Route path="/orders" component={Order}/>
         </Switch>               
       </div>
     </Router>
    )
  }
}


const mapDispatchToProps = dispatch => ({       
  handleLogoutClick: () => dispatch(logoutUser()),
  fetchItems: () => dispatch(fetchItems()),
  updateCart: () => dispatch(updateCart()),
  addUser: () => dispatch(addUser())
})

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps, mapDispatchToProps)(App);