import React from 'react';
import './App.css';

import Header from './components/common/Header';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom';
import HomePage from './components/Home/HomePage';
import CoursesPage from './components/Courses/CoursesPage';
import Footer from './components/common/Footer';

const App = props => ({
  render() {
    return (
      <div>
        <Header />
        <br />
        <br />
        <br />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/courses" component={CoursesPage} />
        </Switch>

        <Footer />
      </div>
    );
  }
});

export default App;