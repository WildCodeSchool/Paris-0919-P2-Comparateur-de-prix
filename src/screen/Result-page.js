import React from 'react'
import DataAnalyse from '../components/DataAnalyse'
import './Result-page.css'
import DisplayData from '../components/DisplayData';

function ResultPage(props) {
  state={index: null}

  console.log("result: ", props.data);
  const test = (Math.floor(Math.random()*100));
  console.log(test);

  handleIndex = (note) => {
    this.setState({index: note})
  }

  return (
    <div className="all">
      <div className="container">
        <h1>TEST</h1>
        <div className="Note">
          <div className="cursor" style={{marginLeft: test + '%'}}></div>
        </div>
        <div>
          <DisplayData data={props.data}/>
          <DataAnalyse data={props.data} back={this.handleIndex}/>
        </div>
      </div>
    </div>
  )
}
export default ResultPage
