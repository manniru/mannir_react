import React from 'react'

class ExampleWithBind extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    };
  }

  componentDidMount() {
    fetch('https://www.bitstamp.net/api/ticker/', {
      method: 'get'
    }).then(function (response) {
      return response.json()
    }).then(function (response) {
      console.log(response);
      this.setState({ data: response.last });
    }.bind(this));
  }

  render() {
    console.log(this.state.data)
    return (
      <div>m</div>
    );
  }
}

export default ExampleWithBind;
