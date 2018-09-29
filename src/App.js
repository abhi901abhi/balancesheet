import React from 'react';

import './App.css';
import Header from './components/common/Header';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom';
import HomePage from './components/Home/HomePage';
import CoursesPage from './components/Courses/CoursesPage';

const App = props => ({
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/courses" component={CoursesPage} />
        </Switch>
      </div>
    );
  }
});

export default App;