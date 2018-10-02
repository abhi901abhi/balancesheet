import React from 'react';

class CardFooter extends React.Component {

    render() {
        return (
            <div className="card-body">
                <h5 className="card-title">{this.props.product.name}</h5>
                <p className="card-text text-center">

                    <img src={this.props.product.image} style={{ height: "150px", width: "150px" }} />
                    <br />
                </p>
                Today Price:
                <p>
                    <span className={`badge badge-${this.props.cardClassName} mr-1 text-${this.props.cardClassName}`}>F ({this.props.product.todayPrice.full})</span>
                    <span className={`badge badge-${this.props.cardClassName} mr-1 text-${this.props.cardClassName}`}>H ({this.props.product.todayPrice.half})</span>
                    <span className={`badge badge-${this.props.cardClassName} mr-1  text-${this.props.cardClassName}`}>Q ({this.props.product.todayPrice.quarter})</span>
                    <span className={`badge badge-${this.props.cardClassName} mr-1  text-${this.props.cardClassName}`}>90 ({this.props.product.todayPrice.ninty})</span>
                </p>
            </div >
        );
    }
}

export default CardFooter;
