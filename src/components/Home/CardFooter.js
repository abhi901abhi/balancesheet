import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ButtonDropdown from './../elements/ButtonDropDown';

class CardFooter extends React.Component {

    render() {
        return (
            <div className=" card-footer text-center">
                <ButtonDropdown text="F" className="danger"></ButtonDropdown>
                <ButtonDropdown text="H" className="warning"></ButtonDropdown>
                <ButtonDropdown text="Q" className="success"></ButtonDropdown>
                <ButtonDropdown text="90" className="primary"></ButtonDropdown>
            </div>
        );
    }
}

export default CardFooter;


    // https://material-ui.com/lab/speed-dial/
