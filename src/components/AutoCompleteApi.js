import React, { Component } from 'react'
import axios from 'axios'

class AutoCompleteApi extends Component {
  constructor(props) {
    super(props)
    this.state = {
      start: '',
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
  }

  handleChange(event) {
    let str = event.target.value
    this.setState({ start: event.target.value }, () => {
      if (this.state.start.length >= 6) {
        this.getAdress()
      }
    })
  }

  getAdress = () => {
    axios
      .get('https://api-adresse.data.gouv.fr/search/?', {
        params: {
          q: this.state.start,
          autocomplete: '0',
        },
      })
      // Extract the DATA from the received response
      .then(
        response =>
          console.log('fdsfsdfsdfsfsdf  ', response.data.values) ||
          response.data.values,
      )
      // Use this data to update the state
      .then(value =>
        this.setState({
          data: value,
        }),
      )
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Domicile: </label>
        {/* show a class or another depending on maximumReached */}
        <input
          id="start"
          name="start"
          type="text"
          value={this.state.start}
          onChange={this.handleChange}
        />
      </form>
    )
  }
}

export default AutoCompleteApi
