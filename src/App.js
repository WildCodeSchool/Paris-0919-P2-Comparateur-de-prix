import React, { Component } from 'react';
import './App.css';
import AutoCompleteText from './components/AutoCompleteText';
import Buttons from './components/Buttons';


class App extends Component {
  render() {  
  return (
    <div className="App">
      <div className="App-Component">
       <div className="App-Component">
            <AutoCompleteText />
            <br /> <br />
            <AutoCompleteText />
            <br /> <br />
            <Buttons />
            
     </div>
   </div>
  </div>
  );
 }
}

export default App;
