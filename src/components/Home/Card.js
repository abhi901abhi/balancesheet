import React from 'react';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import CardFooter from './CardFooter';

class Card extends React.Component {

    handleActionClick = (name) => {
        this.props.toggleCountersMenu(name);
    }
    decreaseStock = (qty, type, product) => {
        this.props.decreaseStock(qty, type, product);
    }
    render() {
        console.log('Card comp rendered');

        return (
            <div className={this.props.cssClassName} key={this.props.product.name}>
                <CardHeader product={this.props.product} cardClassName={this.props.cssClassName} />
                <CardBody
                    product={this.props.product}
                    cardClassName={this.props.cssClassName}
                    onActionItemClick={this.handleActionClick}
                    activatedIdStoredInParent={this.props.activatedIdStoredInParent}
                    decreaseStock={this.decreaseStock}
                />
                <CardFooter product={this.props.product} cardClassName={this.props.cssClassName} />

            </div>
        );
    }
}

export default Card;
