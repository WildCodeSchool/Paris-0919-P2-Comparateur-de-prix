import React from 'react'
import DataAnalyse from '../components/DataAnalyse'
import './Result-page.css'
import DisplayData from '../components/DisplayData';

class ResultPage extends React.Component {
  state = {
    index: null,
    hide: true,
  }

  handleIndex = (data) => {
    this.setState({index: data})
  }

  getMoreInfo = () => {
    let newHide = !this.state.hide
    this.setState({hide: newHide})  
  }

  render(){
  console.log("result: ", this.props.data);
  const test = (this.state.index * 10)
  console.log(test);
  return (
    <div className="all">
      <div className="container">
        <h1>INDICE AIR</h1>
        <div className="Note">
          <div className="cursor" style={{marginLeft: test + '%'}}></div>
        </div>
        <div className="info">
          <button className="moreInfo" onClick={this.getMoreInfo}>
            {this.state.hide ? '+' : '-'}  
          </button>
          <div>
            <div className="moreInfoDisplay" style={this.state.hide ? {display: 'none'} : {display: 'block'}}>
              <DisplayData data={this.props.data}/>
            </div>
          </div>
          <DataAnalyse data={this.props.data} index={this.handleIndex}/>
        </div>
      </div>
    </div>
  )}
}
export default ResultPage
