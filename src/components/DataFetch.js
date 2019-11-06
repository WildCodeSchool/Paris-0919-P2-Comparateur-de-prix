import React from 'react'
import axios from 'axios'
import DisplayData from './DisplayData'
import ConfigKeys from '../config/ConfigKeys'
import DataAnalyse from './DataAnalyse'
import './DataFetch.css'

class DataFetch extends React.Component {
  state = {
    data: '',
    isLoading: false,
  }

  componentWillUnmount() {
    this.getData()
    console.log('WILLMOUNT')
  }

  getData = () => {
    axios
      .get('https://api.plume.io/3.0/live?', {
        params: {
          latitude: this.props.coord[0],
          longitude: this.props.coord[1],
          token: ConfigKeys,
        },
      })
      // Extract the DATA from the received response
      .then(
        response =>
          console.log('reponse plume', response.data.values) ||
          response.data.values,
      )
      // Use this data to update the state
      .then(value =>
        this.setState({
          data: value,
          isLoading: true,
        }),
      )
      .then(console.log('from datafetch: ', this.state.data))
    this.props.fetchPollution(this.state.values)
  }

  render() {
    return (
      <>
        <button
          type="button"
          className="DataFetch-but"
          onClick={this.getData}
        >
          Obtenir la pollution en direct
        </button>
        {this.state.isLoading ? (
          <div>
            <DisplayData data={this.state.data} />
            <DataAnalyse data={this.state.data} />
          </div>
        ) : (
          <div>... Chargement</div>
        )}
      </>
    )
  }
}

export default DataFetch
