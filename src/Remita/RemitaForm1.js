import React, { Component } from 'react'
import AutoComplete from 'material-ui/AutoComplete'
import { Card, CardActions, CardText } from 'material-ui/Card'
import DatePicker from 'material-ui/DatePicker'
import { green500, red500 } from 'material-ui/styles/colors'
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton'
import SelectField from 'material-ui/SelectField'
import Snackbar from 'material-ui/Snackbar'
import TextField from 'material-ui/TextField'
import uuid from 'uuid'
import { ValidationIn, ValidationOut, validate } from 'react-easy-validation'
import validator from 'validator'

const cardStyle = {
  margin: 'auto',
  maxWidth: 500
}

class RemitaForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      points: null,
      city: '',
      selectedCity: null,
      date: null,
      open: false,
      message: '',
      color: null
    }

    this.handleEmail = this.handleEmail.bind(this)
    this.handlePoints = this.handlePoints.bind(this)
    this.handleCity = this.handleCity.bind(this)
    this.handleSelectedCity = this.handleSelectedCity.bind(this)
    this.handleDate = this.handleDate.bind(this)
    this.hideSnackbar = this.hideSnackbar.bind(this)
  }

  handleEmail({ target: { value } }) {
    this.setState({
      email: value
    })
  }

  handlePoints(event, key, payload) {
    this.setState({
      points: payload
    })
  }

  handleCity(searchText) {
    this.setState({
      city: searchText
    })
  }

  handleSelectedCity(searchText) {
    this.setState({
      selectedCity: uuid()
    })
  }

  handleDate(event, date) {
    this.setState({
      date
    })
  }

  hideSnackbar() {
    this.setState({
      open: false
    })
  }

  handleSubmit(group, mute) {
    const result = validate(group, mute)

    this.setState({
      open: true,
      message: result ? 'valid' : 'invalid',
      color: result ? green500 : red500
    })
  }

  render() {
    const { email, points, city, selectedCity, date, open, message, color } = this.state

    return (
      <div>
        <Card style={cardStyle}>
          <CardText>
            <ValidationIn
              groups={['form', 'email']}
              validators={[{
                rule: value => value,
                hint: 'Required'
              }, {
                rule: value => validator.isEmail(value),
                hint: 'Not valid'
              }]}>
              <TextField
                floatingLabelText="Email"
                fullWidth
                onChange={this.handleEmail}
                value={email}
              />
            </ValidationIn>

            <ValidationIn
              groups={['form']}
              validators={[{
                rule: value => value,
                hint: 'Required'
              }, {
                rule: value => value > 50,
                hint: 'Not enough'
              }]}>
              <SelectField
                fullWidth
                floatingLabelText="Points"
                onChange={this.handlePoints}
                value={points}>
                <MenuItem value={25} primaryText="25" />
                <MenuItem value={50} primaryText="50" />
                <MenuItem value={75} primaryText="75" />
                <MenuItem value={100} primaryText="100" />
              </SelectField>
            </ValidationIn>

            <ValidationOut
              groups={['form']}
              validators={[{
                rule: value => value,
                hint: 'Required'
              }, {
                rule: value => validator.isUUID(value),
                hint: 'Not an uuid valid'
              }]}
              value={selectedCity}>
              <AutoComplete
                dataSource={['Paris', 'Hong Kong', 'London']}
                floatingLabelText="City"
                fullWidth hintText="Enter and select a city (Paris, Hong Kong, London)"
                onNewRequest={this.handleSelectedCity}
                onUpdateInput={this.handleCity}
                searchText={city}
              />
            </ValidationOut>

            <ValidationIn
              groups={['form']}
              validators={[{
                rule: value => value,
                hint: 'Required'
              }, {
                rule: value => value.getTime() > new Date().getTime(),
                hint: 'Only in the future'
              }]}>
              <DatePicker
                floatingLabelText="Date"
                fullWidth
                onChange={this.handleDate}
                value={date}
              />
            </ValidationIn>
          </CardText>

          <CardActions>
            <RaisedButton
              label="Standard"
              onClick={() => this.handleSubmit('form')}
              primary
            />

            <RaisedButton
              label="Silencious"
              onClick={() => this.handleSubmit('form', true)}
              secondary
            />

            <RaisedButton
              label="Email"
              onClick={() => this.handleSubmit('email')}
            />
          </CardActions>
        </Card>

        <Snackbar
          autoHideDuration={1000}
          bodyStyle={{
            backgroundColor: color,
            textAlign: 'center',
            textTransform: 'uppercase'
          }}
          message={message}
          onRequestClose={this.hideSnackbar}
          open={open}
        />
      </div>
    )
  }
}

export default RemitaForm
