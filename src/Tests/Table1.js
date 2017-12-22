import React from 'react';
import agp from '../agp/agp'

class Table1 extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    };
  }


  render() {


    return (
      <div>
        <h1>Table1</h1>
        <table width="500" border="1" cellspacing="0" cellpadding="1">
          
          {agp.programmes.map(item =>
            <tr>
              <td>{item.pid}</td>
              <td>{item.program}</td>
              <td>{item.school}</td>
            </tr>
          )}
        </table>
      </div>
    );
  }
}

export default Table1;