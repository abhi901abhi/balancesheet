import React from 'react'
import { Link } from 'react-router-dom'

class NavLink extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);

    }

    handleClick() {
        this.props.onSelect(this.props.name);
    }
    render() {
        return (
            <li onClick={this.handleClick} className={this.props.selected === this.props.name ? 'nav-item active' : 'nav-item'}>
                {/* <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> */}
                <Link {...this.props} className="nav-link">

                </Link>
            </li>
        );
    }
}


export default NavLink;