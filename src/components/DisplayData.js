import React from 'react'

function DisplayData({ data }) {
  console.log('DATA DDDDDDD', data.NO2.value_upm)
  return (
    <div>
      <ul>
        <li>Dioxyde d'azote: {data.NO2.value_upm}</li>
        <li>Particules (PM2.5): {data.PM25.value_upm}</li>
        <li>Particules (PM10): {data.PM10.value_upmd}</li>
        <li>Ozone: {data.O3.value_upm}</li>
      </ul>
    </div>
  )
}

export default DisplayData
