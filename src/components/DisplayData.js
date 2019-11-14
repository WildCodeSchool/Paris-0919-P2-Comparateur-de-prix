import React from 'react'
import './DisplayData.css'

const DisplayData = ({ data }) => {
  return (
    <div className="DisplayData">
      <ul>
        <li>Dioxyde d'azote: {data.NO2.value_upm}</li>
        <li>Souffre: {data.SO2.value_upm}</li>
        <li>Particules (PM10): {data.PM10.value_upm}</li>
        <li>Ozone: {data.O3.value_upm}</li>
      </ul>
    </div>
  )
}

export default DisplayData
