import React from 'react';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import CardFooter from './CardFooter';

class Card extends React.Component {
    render() {
        return (
            <div className={this.props.cssClassName} key={this.props.product.name}>
                <CardHeader product={this.props.product} cardClassName={this.props.cssClassName} />
                <CardBody product={this.props.product} cardClassName={this.props.cssClassName} />
                <CardFooter product={this.props.product} cardClassName={this.props.cssClassName} />
            </div>
        );
    }
}

export default Card;
