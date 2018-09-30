import React from 'react';

class ButtonDropdown extends React.Component {
    state = {
        isOpen: false
    };

    toggleOpen = () => this.setState(
        {
            isOpen: !this.state.isOpen
        });

    render() {
        const menu2Class = `dropdown-menu${this.state.isOpen ? " show" : ""}`;
        return (

            <div className="btn-group" onClick={this.toggleOpen}>
                <button type="button" className={`btn btn-${this.props.className}  mr-1`} >
                    {this.props.text}
                </button>
                <div className={menu2Class}>
                    <span className="dropdown-item cursor-pointer ">
                        -1
                    </span>
                    <span className="dropdown-item cursor-pointer">
                        -2
                    </span><span className="dropdown-item cursor-pointer">
                        -3
                    </span><span className="dropdown-item cursor-pointer">
                        +1
                    </span><span className="dropdown-item cursor-pointer">
                        +2
                    </span><span className="dropdown-item cursor-pointer">
                        +3
                    </span>
                </div>
            </div>



        );
    }
}

export default ButtonDropdown;

