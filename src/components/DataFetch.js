import React from 'react'
import axios from 'axios'
import { Switch, Route, Link } from 'react-router-dom'
import DisplayData from './DisplayData'
import ConfigKeys from '../config/ConfigKey'
import DataAnalyse from './DataAnalyse'
import './DataFetch.css'

class DataFetch extends React.Component {
  state = {
    data: '',
    isLoading: false,
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
          this.setState({data: response.data.values}, ()=>{
            this.props.fetchPollution(this.state.data)
          })
      )
      // setTimeout(() => {
      // }, 500);
    }

  render() {
    return (
      
        <button
          type="button"
          className="DataFetch-but"
          onClick={this.getData}
        >
         PLUME LABS IT
        </button>
      
    )
  }
}

export default DataFetch
