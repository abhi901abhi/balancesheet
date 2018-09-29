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
            <li onClick={this.handleClick} className={this.props.selected === this.props.name ? 'active' : null}>
                <Link {...this.props} />
            </li>
        );
    }
}


export default NavLink;