import React from 'react';



class ButtonDropdown extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false,
            show: ' none',
            localActivatedId: 'none'
        }
    }

    componentDidUpdate(prevProps) {

        // The componentDidUpdate is particularly useful when an operation needs to happen 
        // after the DOM is updated and the update queue is emptied. It's probably most useful
        //  on complex renders and state or DOM changes or when you need something to be the absolutely
        //   last thing to be executed.
        const name = this.props.product.name + '$$' + this.props.text;
        debugger;
        if (prevProps.activatedIdStoredInParent !== this.props.activatedIdStoredInParent
            &&
            this.props.activatedIdStoredInParent !== name) {
            this.setState({
                show: ' none'
            });
        }
    }


    toggleOpen = (e) => {
        var name = e.target.name;
        this.setState((prevState, props) => {
            var item = {
                localActivatedId: name
            }
            if (props.activatedIdStoredInParent === name) {
                if (prevState.show === ' show') {
                    item.show = ' none';
                }
                else {
                    item.show = ' show';
                }
            }
            return item;
        });
        this.props.onActionItemClick(name);
    }

    decreaseStock = (qty, type, product) => {
        this.props.decreaseStock(qty, type, product);
    }

    numberClick = (e) => {
        var qty = parseFloat(e.target.innerText);
        var type = e.target.getAttribute("type");
        var { product } = this.props;

        this.setState((prevState, props) => {

            var item = {
                show: ' none'
            }
            return item;
        });
        this.decreaseStock(qty, type, product);
    }

    render() {
        return (
            <div className="btn-group" >
                <button type="button" className={`btn btn-${this.props.className}  mr-1`} name={this.props.product.name + '$$' + this.props.text} onClick={this.toggleOpen}>
                    {this.props.text}
                </button>


                <div className={`dropdown-menu ${this.state.show}`}>
                    <span className="dropdown-item cursor-pointer " onClick={this.numberClick} type={this.props.text}>
                        -1
                    </span>
                    <span className="dropdown-item cursor-pointer" onClick={this.numberClick} type={this.props.text}>
                        -2
                    </span>
                    <span className="dropdown-item cursor-pointer" onClick={this.numberClick} type={this.props.text}>
                        -3
                    </span>
                    <span className="dropdown-item cursor-pointer" onClick={this.numberClick} type={this.props.text}>
                        1
                    </span>
                </div>
            </div>



        );
    }
}

export default ButtonDropdown;

