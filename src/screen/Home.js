import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import DataFetch from '../components/DataFetch'
import AutoCompleteText from '../components/AutoCompleteText'
import AutoCompleteApi from '../components/AutoCompleteApi'
import './Home.css'

class Home extends React.Component {
  state = {
    coord: [],
    pollution: '',
  }

  handleFetchCoord = coord => {
    this.setState({ coord: coord })
  }

  handleFetchPollution = pollution => {
    this.setState({ pollution: pollution })
  }

  render() {
    if (this.state.splash) {
      return <div className="splash"></div>
    }
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
