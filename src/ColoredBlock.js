import React from 'react';
import ChangeColorButton from './ChangeColorButton.js';

let style = { height: '200px', width: '200px', backgroundColor: 'red' };
let text = "I dont like Red";

class ColoredBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            style: style,
            text: text
        };
    }
    handleChangeColorButtonClick() {


        if (style.backgroundColor === "blue") {
            style = { height: '200px', width: '200px', backgroundColor: 'red' };
            text = "I dont like red";
        }
        else {
            style = { height: '200px', width: '200px', backgroundColor: 'blue' };
            text = "I dont like blue";

        }
        this.setState({
            style: style,
            text: text
        });
    }
    render() {
        return (
            <div style={this.state.style}>
                <ChangeColorButton onChangeColorButtonClick={() => this.handleChangeColorButtonClick()} text={this.state.text}></ChangeColorButton>
            </div >
        )
    }
}

export default ColoredBlock;