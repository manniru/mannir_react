import React, { Component } from 'react';
import Fetch from 'react-fetch-component';

/*
  Common pattern is to encapsalate the URL within a component
  and pass the remaining props to <Fetch />
*/

function Fetch2({ username, ...rest }) {
  const url = `https://api.github.com/users/${username}/repos`;

  return <Fetch url={url} {...rest} />
}

export default class DataComponentExample extends Component {
  render() {
    return (
      <div>
        <h1>Data Component</h1>
        <Fetch2 username="manniru">
          {({ loading, data, error }) => (
            <div>
              {loading && <span>Loading...</span>}
              {data && data.map((d, i) => <div key={i}>{d.name}</div>)}
            </div>
          )}
        </Fetch2>
      </div>
    );
  }
}
