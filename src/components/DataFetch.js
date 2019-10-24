import React from 'react'
import axios from 'axios'
import DisplayData from './DisplayData'
import ConfigKeys from './ConfigKeys'

class DataFetch extends React.Component {
  state = {
    data: '?',
    isLoading: false,
  }

  getData = () => {
    // Send the request
    axios
      .get(
        'https://api.plume.io/3.0/live?latitude=48.85&longitude=2.294&token=' +
          ConfigKeys,
      )
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
          isLoading: true,
        }),
      )
  }

  render() {
    return (
      <>
        {this.state.isLoading ? (
          <DisplayData data={this.state.data} />
        ) : (
          <div>... Chargement</div>
        )}
        <button type="button" onClick={this.getData}>
          Obtenir la pollution en direct
        </button>
      </>
    )
  }
}

export default DataFetch
