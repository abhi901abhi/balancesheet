import React from 'react';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import CardFooter from './CardFooter';

class Card extends React.Component {

    handleActionClick = (name) => {
        debugger;
        this.props.toggleCountersMenu(name);
    }
    render() {
        console.log('Card comp rendered');

        return (
            <div className={this.props.cssClassName} key={this.props.product.name}>
                <CardHeader product={this.props.product} cardClassName={this.props.cssClassName} />
                <CardBody product={this.props.product} cardClassName={this.props.cssClassName} />
                <CardFooter
                    product={this.props.product}
                    cardClassName={this.props.cssClassName}
                    onActionItemClick={this.handleActionClick}
                    activatedDropDownMenuName={this.props.activatedDropDownMenuName}
                />
            </div>
        );
    }
}

export default Card;
