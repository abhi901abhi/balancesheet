import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ButtonDropdown from './../elements/ButtonDropDown';

class CardFooter extends React.Component {

    state = {
        activeItemName: 'none'
    }

    handleActionItemClick = (name, open) => {
        debugger;
        if (open) {
            this.setState({
                activeItemName: name
            });
            this.props.onActionItemClick(name);
        }
        else {
            this.setState({
                activeItemName: 'none'
            });
        }
    }

    render() {
        console.log('Card Footer Drop Down comp rendered');

        return (
            <div className=" card-footer text-center">
                <ButtonDropdown text="F" className="danger"
                    product={this.props.product}
                    onActionItemClick={this.handleActionItemClick}
                    activatedDropDownMenuName={this.props.activatedDropDownMenuName}
                    isActive={this.props.activatedDropDownMenuName === this.state.activeItemName}
                ></ButtonDropdown>

                {/* <ButtonDropdown text="H" className="warning"
                    product={this.props.product}

                    onActionItemClick={this.handleActionItemClick}
                    activatedDropDownMenuName={this.props.activatedDropDownMenuName}
                ></ButtonDropdown>

                <ButtonDropdown text="Q" className="success"
                    product={this.props.product}
                    onActionItemClick={this.handleActionItemClick}
                    activatedDropDownMenuName={this.props.activatedDropDownMenuName}
                ></ButtonDropdown>

                <ButtonDropdown text="90" className="primary"
                    product={this.props.product}
                    onActionItemClick={this.handleActionItemClick}
                    activatedDropDownMenuName={this.props.activatedDropDownMenuName}
                ></ButtonDropdown> */}
            </div>
        );
    }
}

export default CardFooter;


    // https://material-ui.com/lab/speed-dial/
