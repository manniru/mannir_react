import React, { Component } from 'react';

//console.log(sendsms('2348069354904', 'Tesing Message From React JS ES6, Thank you'))
const sendsms = (phone, message) => {
    var request = require('request');
    var url = 'http://www.smslive247.com/http/index.aspx?cmd=sendquickmsg&owneremail=manniru@gmail.com&subacct=IKCOE&subacctpwd=Mannir@13131&message=' + message + '&sender=MANNIR&sendto=' + phone +'&msgtype=0'
    return request(url, function (error, response, body) {
    if (!error) {
        return body;
    }
    });
}


class SMS extends Component {
    render() {


        return (
            <div>
                <h1>SMS</h1>
            </div>
        );
    }
}

export default SMS;