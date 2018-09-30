import React from 'react';
import axios from 'axios';
import './HomePage.css';
import Card from './Card';


class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      activatedDropDownMenuName: ""
    };
  }

  toggleCountersMenu = (name) => {
    debugger;
    var name1 = name;
    this.setState((prevState) => {
      debugger;
      return {
        activatedDropDownMenuName: name1
      }
    });

  }


  componentDidMount() {
    axios.get(`database/livedata.json`)
      .then(res => {

        this.setState({
          items: res.data
        })
      });

  }


  render() {
    console.log('Home Page comp rendered');

    const colorClasses = ["primary", "secondary", "success", "danger", "light", "dark", "info"];
    let colorClass = "info";
    let i = 0;
    const products = this.state.items.map((item, index) => {
      i = (index > 7) ? 0 : i;
      colorClass = colorClasses[i];
      i++;
      let cssText = `card text-` + ((colorClass === "light") ? "black" : (colorClass == undefined ? "black" : "white")) + ` bg-` + colorClass + ` maxWidth18rm`;

      return <div>
        <Card
          cssClassName={cssText}
          product={item}
          activatedDropDownMenuName={this.state.activatedDropDownMenuName}
          toggleCountersMenu={this.toggleCountersMenu}
        >
        </Card>;
      </div>

    });

    return (
      <div>
        <div className="card-columns">
          {products}
        </div>
      </div >
    );
  }
}

export default HomePage;
