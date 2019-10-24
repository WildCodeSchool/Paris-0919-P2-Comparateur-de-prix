import React from 'react'
import axios from 'axios'
import DisplayData from './DisplayData'
import ConfigKeys from './ConfigKeys'
import LocationData from './LocationData'

class DataFetch extends React.Component {
  state = {
    data: '',
    isLoading: false,
  }

  getData = () => {
    axios
      .get('https://api.plume.io/3.0/live?', {
        params: {
          latitude: LocationData.latitude[0],
          longitude: LocationData.longitude[0],
          token: ConfigKeys,
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
