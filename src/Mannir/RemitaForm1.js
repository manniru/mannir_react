import React, { Component } from 'react';
import Header from './Header'

import firebase from '../firebase'

class RemitaForm extends Component {

  constructor() {
    super();
    this.state = {
      servicetype: '',
      name: '',
      phone: '',
      mail: '',
      amount: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }


  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    var time = (new Date).getTime();

    e.preventDefault();
    const itemsRef = firebase.database().ref('/react/remita/' + time);
    const item = {
      servicetype: this.state.servicetype,
      name: this.state.name,
      phone: this.state.phone,
      mail: this.state.mail,
      amount: this.state.amount
    }
    itemsRef.set(item);
    alert('records saved!');

    this.setState({
      servicetype: '',
      name: '',
      phone: '',
      mail: '',
      amount: ''
    });
  }

  render() {
    return (
      <div className='app'>
        <header>
          <div className='wrapper'>
            <h1>Mannir eSystems Limited</h1>

          </div>
        </header>
        <div className='container'>
          <section className='add-item'>
            <h2><strong>Remita Form</strong></h2>
            <form onSubmit={this.handleSubmit}>
              <select name="servicetype" id="soflow-color" onChange={this.handleChange} value={this.state.servicetype}>
                <option>-Select-</option>
                <option value="">-Select-</option>
                <option value="Application">Application</option>
                <option value="Registration">Registration</option>
                <option value="4430731">Demo</option>
              </select>
              <input type="text" name="name" placeholder="Payer Name" onChange={this.handleChange} value={this.state.name} />
              <input type="text" name="phone" placeholder="Payer Phone" onChange={this.handleChange} value={this.state.phone} />
              <input type="text" name="mail" placeholder="Payer Email" onChange={this.handleChange} value={this.state.mail} />
              <input type="text" name="amount" placeholder="Amount" onChange={this.handleChange} value={this.state.amount} />
              <button>Submit</button>
            </form>
          </section>
          <section className='display-item'>
            <div className='wrapper'>
              <ul>
              </ul>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
export default RemitaForm;