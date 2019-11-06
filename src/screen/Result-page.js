import React from 'react'
import '../App'
import './Result-page.css'

function Main() {
  return (
    <div className="all">
      <div className="container">
        <div className="titre">
          <h1>Greengood</h1>
        </div>
        <div className="recap">
          <p> Recapitulatif</p>
        </div>
        <div className="echelle"></div>
        <div className="Note">
          <div className="progress"></div>
          <div className="jeune"></div>
          <div className="warn"></div>
          <div className="warning"></div>
        </div>
      </div>
    </div>
  )
}

export default Main
