import React from 'react';

class CardHeader extends React.Component {
    render() {
        return (
            <div className="card-header">
                Stock:
               <p>
                    <h6> <span class="badge badge-dark mr-1 text-warning">F - {this.props.product.stockIn.full}</span>
                        <span class="badge badge-dark mr-1 text-warning">H - {this.props.product.stockIn.half}</span>
                        <span class="badge badge-dark mr-1 text-warning">Q - {this.props.product.stockIn.quarter}</span>
                        <span class="badge badge-dark mr-1 text-warning">90 - {this.props.product.stockIn.ninty}</span></h6>
                </p>

            </div>
        );
    }
}

export default CardHeader;
