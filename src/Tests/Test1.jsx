import React, { Component } from 'react';
import remita_ordera_status from '../Remita/Remita'

var rrr = null;
/*
remita_ordera_status('12345').then(function(v) {
    console.log(v); // 1
    rrr = v.RRR
    });
    */

class Test1 extends Component {
    render() {


        return (
            <div>
                <h1>I am Test1 {rrr}</h1>
            </div>
        );
    }
}

export default Test1;