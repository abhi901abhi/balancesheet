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

                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <a className="navbar-brand" href="#">StockIT</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <NavLink to="/" onSelect={this.handleClick} name="home" selected={this.state.selected}>Home</NavLink >
                            <NavLink to="/courses" onSelect={this.handleClick} name="courses" selected={this.state.selected}>courses</NavLink >
                            <NavLink to="/products" onSelect={this.handleClick} name="products" selected={this.state.selected}>Products</NavLink >
                            <NavLink to="/admin" onSelect={this.handleClick} name="admin" selected={this.state.selected}>Admin area</NavLink >

                            {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown        </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li> */}
                            {/* <li className="nav-item">
                                <a className="nav-link disabled" href="#">Disabled</a>
                            </li> */}
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </div>

        );
    }
}


export default Header;
