import React from 'react'
import './DisplayData.css'

const DisplayData = ({ data }) => {
  return (
    <div className="DisplayData">
      <ul>
        <li>
          Dioxyde d'azote <div>{data.NO2.value_upm}</div>{' '}
        </li>
        <li>
          Soufre <div>{data.SO2.value_upm}</div>{' '}
        </li>
        <li>
          Particules (PM10) <div>{data.PM10.value_upm}</div>{' '}
        </li>
        <li>
          Ozone <div>{data.O3.value_upm}</div>{' '}
        </li>
      </ul>
    </div>
  )
}

export default DisplayData
