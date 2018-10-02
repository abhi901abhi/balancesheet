
import React from 'react';

var currentDate = new Date();
var dateWithFullMonthName = getDate();

function pad(n) {
    return n < 10 ? '0' + n : n;
}
function getDate() {
    var date = currentDate.getDate();
    var month = currentDate.getMonth();
    var year = currentDate.getFullYear();

    var monthNames = [
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ];

    var dateWithFullMonthName = monthNames[month] + " " + pad(date) + ", " + year;
    return dateWithFullMonthName;
}

function getTime() {
    var currentDate = new Date();
    var currentTime = currentDate.toLocaleTimeString(undefined, {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    return currentTime;
}



class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timeNow: getTime()
        };
    }
    componentDidMount() {
        setInterval(() => {

            this.setState({
                timeNow: getTime()
            });
        }, 1000);
    }
    render() {

        return (
            <footer className="container-fluid w-100 bg-dark text-light py-3">
                {dateWithFullMonthName},
                <span className="pull-right">{this.state.timeNow}</span>
            </footer>

        );
    }
}


export default Footer;


