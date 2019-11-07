import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import DataFetch from '../components/DataFetch'
import AutoCompleteText from '../components/AutoCompleteText'
import AutoCompleteApi from '../components/AutoCompleteApi'

class Home extends React.Component {
  state = {
    coord: [],
    pollution: '',
    add: ''
  }

  handleFetchCoord = coord => {
    this.setState({ coord: coord })
  }

  handleFetchPollution = pollution => {
    this.setState({ pollution: pollution })
    console.log("from home: ", this.state.pollution)
    this.props.data(pollution)
  }

  render() {
    return (
      <>
        <AutoCompleteApi fetch={this.handleFetchCoord} />
        <AutoCompleteText />
        <Link to="/resultpage">
          <DataFetch
            coord={this.state.coord}
            fetchPollution={this.handleFetchPollution}
          />
        </Link>
      </>
    )
  }
}

export default Home
