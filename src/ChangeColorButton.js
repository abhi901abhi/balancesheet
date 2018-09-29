import React from 'react';

class ChangeColorButton extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick() {
        this.props.onChangeColorButtonClick();
    }
    render() {
        return (
            <button onClick={() => this.handleClick()}>{this.props.text}</button>
        );
    }
}

export default ChangeColorButton;