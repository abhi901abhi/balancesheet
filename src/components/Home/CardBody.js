import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonDropdown from './../elements/ButtonDropDown';

class CardBody extends React.Component {

    handleActionItemClick = (name) => {
        this.props.onActionItemClick(name);
    }
    decreaseStock = (qty, type, product) => {
        this.props.decreaseStock(qty, type, product);
    }

    render() {
        console.log('Card Footer Drop Down comp rendered');
        return (
            <div className=" card-footer text-center">
                <ButtonDropdown text="F" className="danger"
                    product={this.props.product}
                    onActionItemClick={this.handleActionItemClick}
                    activatedIdStoredInParent={this.props.activatedIdStoredInParent}
                    decreaseStock={this.decreaseStock}
                ></ButtonDropdown>

                <ButtonDropdown text="H" className="warning"
                    product={this.props.product}
                    onActionItemClick={this.handleActionItemClick}
                    activatedIdStoredInParent={this.props.activatedIdStoredInParent}
                    decreaseStock={this.decreaseStock}
                ></ButtonDropdown>

                {/* <ButtonDropdown text="Q" className="success"
                    product={this.props.product}
                    onActionItemClick={this.handleActionItemClick}
                    activatedIdStoredInParent={this.props.activatedIdStoredInParent}
                    decreaseStock={this.decreaseStock}
                ></ButtonDropdown>

                <ButtonDropdown text="90" className="primary"
                    product={this.props.product}
                    onActionItemClick={this.handleActionItemClick}
                    activatedIdStoredInParent={this.props.activatedIdStoredInParent}
                    decreaseStock={this.decreaseStock}
                ></ButtonDropdown> */}
            </div>
        );
    }


}

export default CardBody;
