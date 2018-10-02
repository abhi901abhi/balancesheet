import React from 'react';
//import { withStyles } from '@material-ui/core/styles';


class CardHeader extends React.Component {

    render() {
        return (
            <div className="card-header">
                Stock: <h6>
                    <p>
                        <span className="badge badge-dark mr-1 text-warning">F &rarr; {this.props.product.stockIn.full}</span>
                        <span className="badge badge-dark mr-1 text-warning">H &rarr; {this.props.product.stockIn.half}</span>
                        <span className="badge badge-dark mr-1 text-warning">Q &rarr; {this.props.product.stockIn.quarter}</span>
                        <span className="badge badge-dark mr-1 text-warning">90 &rarr; {this.props.product.stockIn.ninty}</span>
                    </p>
                </h6>
            </div>
        );
    }

}

export default CardHeader;


    // https://material-ui.com/lab/speed-dial/
