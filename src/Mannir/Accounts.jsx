import React, { Component } from 'react';
import './Accounts.css';

var faker = require('faker');

var student = {
    id: 'U1131819',
    name: faker.name.findName(),
    phone: faker.phone.phoneNumberFormat(2),
    email: faker.internet.email(),
    address: faker.address.streetAddress(),
}

var data = [
    {
        date: '28/02/2017 12:00:00 AM',
        type: 'RECEIPT',
        docno: 'RCP1062-KN',
        desc: 'Cash Payment for Course Dee - Undergraduate Courses - NGN5,200,000',
        debit: 'NGN 500,000.00',
        credit: '',
        balance: 'NGN 500,000.00',
    },
    {
        date: '29/02/2017 12:00:00 AM',
        type: 'INVOICE',
        docno: 'RCP1062-KN',
        desc: 'Cash Payment for Course Dee - Undergraduate Courses - NGN5,200,000',
        debit: 'NGN 200,000.00',
        credit: '',
        balance: 'NGN 700,000.00',
    }
]

const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

for (var i = 0; i < 20; i++) {
    data.push({
        date: faker.date.between('2017-01-01', '2017-12-31')+'',
        type: 'RECEIPT',
        docno: 'RCP1062-KN',
        desc: 'Cash Payment for Course Dee - Undergraduate Courses - NGN5,200,000',
        debit: '',
        credit: numberWithCommas(faker.commerce.price(10000,100000,2,"NGN ")),
        balance: numberWithCommas(faker.commerce.price(10000,100000,2,"NGN ")),
    });
  }

// data.map(a => {
//     console.log(a.date)
// })

console.log(faker.date.between('2015-01-01', '2015-12-31'))
class Accounts extends Component {
    render() {


        return (
            <div>
                <table width="800" border="1" align="center" cellpadding="1" cellspacing="0">
  <tr>
    <td align="center"><strong>MANNIR ESYSTEMS LIMITED</strong></td>
  </tr>
  <tr>
    <td height="330" align="center" valign="top"><p><strong>STATEMENT OF ACCOUNT AS AT 22/12/2017</strong></p>
      <table width="500" border="1" cellspacing="0" cellpadding="1">
        <tr>
          <td width="123">Student ID:</td>
          <td width="367">{student.id}</td>
        </tr>
        <tr>
          <td>Student Name:</td>
          <td>{student.name}</td>
        </tr>
        <tr>
          <td>Student Address:</td>
          <td>{student.address}</td>
        </tr>
        <tr>
          <td>Student Phone:</td>
          <td>{student.phone}</td>
        </tr>
        <tr>
          <td>Student Email:</td>
          <td>{student.email}</td>
        </tr>
        <tr>
          <td>Intakes:</td>
          <td>Bsc Software Engineering : 2013: Graduated<br />
          Msc. Computer Systems Engineering : 2015 : Active</td>
        </tr>
      </table>
      <br />
      <table width="100%" border="1" cellspacing="0" cellpadding="1">
        <tr>
          <td width="13%"><strong>Date</strong></td>
          <td width="12%"><strong>Type</strong></td>
          <td width="11%"><strong>Document No.</strong></td>
          <td width="41%"><strong>Description</strong></td>
          <td width="5%"><strong>Debit</strong></td>
          <td width="9%"><strong>Credit</strong></td>
          <td width="9%"><strong>Balance</strong></td>
        </tr>
        
        {
            data.map(a => {
                return (     
                    <tr>
                    <td>{a.date}</td>
                    <td>{a.type}</td>
                    <td>{a.docno}</td>
                    <td>{a.desc}</td>
                    <td>{a.debit}</td>
                    <td>{a.credit}</td>
                    <td>{a.balance}</td>
                  </tr>
                  );
                })
       }


        <tr>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td><strong>4,200,000</strong></td>
          <td><strong>1,000,000</strong></td>
        </tr>
      </table>
    <p>&nbsp;</p></td>
  </tr>
  <tr>
    <td align="center"><pre>Developed By: Muhamamad Mannir Ahmad</pre></td>
  </tr>
</table>
            </div>
        );
    }
}

export default Accounts;