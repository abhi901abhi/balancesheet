import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NavLink from './../../modules/NavLink';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            selected: 'home'
        };
    }

    handleClick(name) {
        debugger;
        this.setState({
            selected: name
        });

    }


    render() {
        return (
            <nav className="navbar navbar-default" >
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="/">StockIT</a>
                    </div>
                    <ul className="nav navbar-nav">
                        <NavLink to="/" onSelect={this.handleClick} name="home" selected={this.state.selected}>Home</NavLink >
                        <NavLink to="/courses" onSelect={this.handleClick} name="courses" selected={this.state.selected}>courses</NavLink >
                        <NavLink to="/products" onSelect={this.handleClick} name="products" selected={this.state.selected}>Products</NavLink >
                        <NavLink to="/admin" onSelect={this.handleClick} name="admin" selected={this.state.selected}>Admin area</NavLink >
                    </ul>
                </div>
            </nav>

        );
    }
}


export default Header;
