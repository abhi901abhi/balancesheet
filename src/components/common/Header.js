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
            <div>

                {/* <nav className="navbar navbar-default" >
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
                </nav> */}

                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#">StockIT</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <NavLink to="/" onSelect={this.handleClick} name="home" selected={this.state.selected}>Home</NavLink >
                            <NavLink to="/courses" onSelect={this.handleClick} name="courses" selected={this.state.selected}>courses</NavLink >
                            <NavLink to="/products" onSelect={this.handleClick} name="products" selected={this.state.selected}>Products</NavLink >
                            <NavLink to="/admin" onSelect={this.handleClick} name="admin" selected={this.state.selected}>Admin area</NavLink >

                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown        </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" href="#">Disabled</a>
                            </li>
                        </ul>
                        <form class="form-inline my-2 my-lg-0">
                            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </div>

        );
    }
}


export default Header;
