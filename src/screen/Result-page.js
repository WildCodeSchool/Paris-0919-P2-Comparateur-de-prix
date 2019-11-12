import React from 'react'
import DataAnalyse from '../components/DataAnalyse'
import './Result-page.css'
import DisplayData from '../components/DisplayData';

class ResultPage extends React.Component {
  state = {
    index: null,
  }

  handleIndex = (data) => {
    this.setState({index: data})
  }

  render(){
  console.log("result: ", this.props.data);
  //const test = (Math.floor(Math.random()*100));
  const test = (this.state.index * 10)
  console.log(test);
  return (
    <div className="all">
      <div className="container">
        <h1>TEST</h1>
        <div className="Note">
          <div className="cursor" style={{marginLeft: test + '%'}}></div>
        </div>
        <div>
          <DisplayData data={this.props.data}/>
          <DataAnalyse data={this.props.data} index={this.handleIndex}/>
        </div>
      </div>
    </div>
  )}
}
export default ResultPage
