import React from 'react';
import './AutoCompleteText.css';

export default class AutoCompleteText extends React.Component{
    constructor (props){
        super(props);
        this.items = [
            'Jeremy',
            'Arthur',
            'Simon',
            'Yohann',
            '15 rue de poissy',
            '40 rue du poulet',
            '2 rue de la chèvre', 
            '40 rue de chepaskoi',
        ];
        this.state ={
            suggestions:[],
            text: '',
        };
    }
onTextChanged = (e) => {
    const value = e.target.value;
    let suggestions = [];
    if (value.length > 0){
        const regex = new RegExp (`^${value}`, 'i');
        suggestions = this.items.sort().filter(v =>regex.test(v));
    }
    this.setState(() => ({suggestions, text: value }));
  }

suggestionsSelected (value){
    this.setState(() => ({
        text: value,
        suggestions: [],
    }))
}

    renderSugegestions () {
        const { suggestions } = this.state;
        if (suggestions.length === 0) {
            return null;
    }
    return (
        <ul>
           {suggestions.map((item) => <li onClick={() => this.suggestionsSelected(item)}>{item}</li>)}
        </ul>
    );
}
    render() {
        const{ text} = this.state;
        return (
            <div className="AutoCompleteText">
                <input  value={text} onChange={this.onTextChanged} type="text" />
                {this.renderSugegestions()}
             </div>
        )
    }  
}
