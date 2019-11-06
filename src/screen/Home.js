import React from 'react'

import DataFetch from '../components/DataFetch'
import AutoCompleteText from '../components/AutoCompleteText'
import AutoCompleteApi from '../components/AutoCompleteApi'
import Footer from '../components/Footer'

class Home extends React.Component {
  state = {
    coordo: [],
  }

  handleFetch = coord => {
    this.setState({ coordo: coord })
  }

  render() {
    return (
      <>
        <h2>Accueil</h2>

        <div>
          <AutoCompleteApi fetch={this.handleFetch} />

          <AutoCompleteText />
        </div>

        <DataFetch coord={this.state.coordo} />

        <Footer />
      </>
    )
  }
}

export default Home
