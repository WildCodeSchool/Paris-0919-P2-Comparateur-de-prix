import React, { Component } from 'react';
import './App.css';
import AutoCompleteText from './components/AutoCompleteText';


class App extends Component {
  render() {  
  return (
    <div className="App">
      <div className="App-Component">
       <div className="App-Component">
            <AutoCompleteText />
            <br /> <br />
            <AutoCompleteText />
     </div>
   </div>
  </div>
  );
 }
}

export default App;
