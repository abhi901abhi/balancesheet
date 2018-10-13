import React from 'react';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

import Header from './components/common/Header';
import { ToastContainer, toast, Slide, Zoom, Flip, Bounce } from 'react-toastify';

import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom';
import HomePage from './components/Home/HomePage';
import Footer from './components/common/Footer';
import AdminPage from './components/Admin/AdminPage';
import DashBoardPage from './components/Dashboard/DashBoardPage';
import ProductsPage from './components/Products/ProductsPage';


const App = props => ({

  render() {
    return (
      <div>
        <div id="wrap">
          <ToastContainer
            position="bottom-center"
            draggablePercent={60}
            transition={Flip} />
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/" component={ProductsPage} />
              <Route path="/dashboard" component={DashBoardPage} />
              <Route path="/products" component={ProductsPage} />
              <Route path="/admin" component={AdminPage} />
            </Switch>
          </div>
          <div id="push"></div>
        </div>
        <Footer />
      </div>
    );
  }
});

export default App;