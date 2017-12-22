import React, { Component } from 'react';
import Fetch from 'react-fetch-component';

import fetchMock from 'fetch-mock';

export default class Basic extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: ''
    };
  }

  render() {
    console.log(this.state.data[1].rate)
    return (
      <div>
        <h1>Basic</h1>
        {this.state.data[1].rate}
      </div>
    );
  }

  /* Setup consistent fetch responses */
  componentWillMount() {

    var data = [{ name: 'aysha' }];
    var bitstamp = [
      {
        high: "19666.00",
        last: "18947.62",
        timestamp: "1513582584",
        bid: "18890.24",
        vwap: "18834.59",
        volume: "13167.18846628",
        low: "17835.20",
        ask: "18948.98",
        open: 18953
      }
    ]

    var data2 = {
      "1": {
        "sn": "1",
        "type": "Executive",
        "rate": "27840",
        "deposit": "30000"
      },
      "2": {
        "sn": "2",
        "type": "Executive Double",
        "rate": "16240",
        "deposit": "18000"
      },
      "3": {
        "sn": "3",
        "type": "Luxury",
        "rate": "14500",
        "deposit": "16000"
      },
      "4": {
        "sn": "4",
        "type": "Standard",
        "rate": "11020",
        "deposit": "12000"
      }
    };
    this.setState({ data: data2 });
  }

  componentWillUnmount() {
    fetchMock.restore();
  }
}
