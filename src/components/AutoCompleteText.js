import React from 'react'
import './AutoComplete.css'

 class AutoCompleteText extends React.Component {

  state = {
    suggestions: [],
    text: '',
  }

  items = [
    '15 rue de poissy',
    '40 rue du poulet',
    '2 rue de la chèvre',
    '40 rue de chepaskoi',
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