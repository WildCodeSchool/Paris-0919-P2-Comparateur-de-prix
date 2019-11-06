import React from 'react'
import './AutoComplete.css'

 class AutoCompleteText extends React.Component {

  state = {
    suggestions: [],
    text: '',
  }

  items = [
    'WildCodeSchool, 11 rue de Poissy, 75005, Paris',
    'Google France, 8 rue Londres, 75009, Paris ',
    'Societe General, 3 rue Rébeval, 75019, Paris',  
    'HSBC Paris Auber,10 rue Auber, 75009 Paris',
    'Infobat, 34 rue de Picpus, 75012 PARIS',
    'Ionis X, 2 rue des quatre fils, 75003 Paris',
    'Manwork, 140 Rue de rivoli, 75001 Paris',
    'Chauvin Arnoux, 190 Rue Championnet, 75018 Paris',
    'LTD International, 43 Rue du FG Montmartre, 75009 Paris',
    'Baselec Entreprise, 56 Boulevard Diderot, 75012 Paris',
    'Ubisoft France, 2 rue du Rohan, 93100 Paris',
  ]
  
  onTextChanged = e => {
    const value = e.target.value
    let suggestions = []
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, 'i')
      suggestions = this.items.sort().filter(v => regex.test(v))
    }
    this.setState(() => ({ suggestions, text: value }))
  }

  suggestionsSelected(value) {
    this.setState(() => ({
      text: value,
      suggestions: [],
    }))
  }

  renderSugegestions() {
    const { suggestions } = this.state
    if (suggestions.length === 0) {
      return null
    }
    return (
      <ul>
        {suggestions.map(item => (
          <li onClick={() => this.suggestionsSelected(item)}>
            {item}
          </li>
        ))}
      </ul>
    )
  }
  render() {
    const { text } = this.state
    return (
      <div className="AutoCompleteText">
        <label>Entreprise: </label>
        <input
          id="text"
          name="text"
          value={text}
          onChange={this.onTextChanged}
          type="text"
        />
        {this.renderSugegestions()}
      </div>
    )
  }
}

export default AutoCompleteText