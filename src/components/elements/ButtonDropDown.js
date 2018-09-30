import React from 'react';


let menuClass = `dropdown-menu`;

class ButtonDropdown extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false
        }
    }


    toggleOpen = (e) => {
        debugger;
        var name = e.target.name;
        this.setState((prevState, props) => {
            props.onActionItemClick(name, !JSON.parse(JSON.stringify(prevState.open)));
            return {
                open: !JSON.parse(JSON.stringify(prevState.open))
            }
        });
    }

    render() {
        debugger;

        if (this.props.isActive) {
            menuClass = menuClass + ' show';
        } else {
            menuClass = `dropdown-menu`
        }

        return (

            <div className="btn-group" >
                <button type="button" className={`btn btn-${this.props.className}  mr-1`} name={this.props.product.name + '$$' + this.props.text} onClick={this.toggleOpen}>
                    {this.props.text} - {this.props.isActive + ''}
                </button>


                <div className={menuClass}>
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

