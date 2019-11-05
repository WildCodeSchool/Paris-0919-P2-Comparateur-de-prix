import React from 'react'

import DataFetch from '../components/DataFetch'
import AutoCompleteText from '../components/AutoCompleteText'
import AutoCompleteApi from '../components/AutoCompleteApi'
import Buttons from '../components/Buttons'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <h2>Accueil</h2>
      <div className="App-Component">
        <AutoCompleteApi />
        <br /> <br />
        <AutoCompleteText />
        <br /> <br />
        <Buttons />
      </div>
      <DataFetch />
      <Footer />
    </>
  )
}

export default Home
