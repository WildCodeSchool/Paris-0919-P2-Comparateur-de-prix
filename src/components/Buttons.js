import React from 'react';
import './Buttons.css'

class Buttons extends React.Component{
    
   clicked(Text){
       
   } 
    render (){

        return<div>
            <button className="but" onClick={ (e) => { this.clicked("") } }>Start</button>
        </div>;

    }
}

export {Buttons as default};