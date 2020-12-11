import { connect } from 'react-redux';

import {
  BrowserRouter as Router, 
  Route, 
  Switch
} from "react-router-dom"; 

import {logoutUser} from './actions/userActions';
import {fetchItems} from './actions/itemActions';
import {updateCart} from './actions/cartActions';
import {addUser} from './actions/userActions';
// import React, { useEffect } from 'react';
import React, { Component } from 'react';
import Home from './containers/Home'
import Navbar from './components/Navbar'
import SignupPage from './containers/SignupPage';
import LoginPage from './containers/LoginPage';
import ItemsList from './containers/ItemsList';
import CartPage from './containers/CartPage';


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