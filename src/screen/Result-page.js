import React from 'react'

import './Result-page.css'

function ResultPage(props) {

  console.log("result: ", props.data);
  const test = (Math.floor(Math.random()*100));
  console.log(test);
  return (
    <div className="all">
      <div className="container">
        <h1>TEST</h1>
        <div className="Note">
          <div className="cursor" style={{marginLeft: test + '%'}}></div>
        </div>
      </div>
    </div>
  )
}
export default ResultPage
