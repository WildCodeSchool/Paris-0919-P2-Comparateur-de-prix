import React from 'react'
import AutoCompleteApi from './AutoCompleteApi'
import AutoCompleteText from './AutoCompleteText'
import DataFetch from './DataFetch'

class Form extends React.Component {
  state = {
    coordo: [],
  }

  handleFetch = coord => {
    this.setState({ coordo: coord })
  }
  render(){
    return(
      <form className="Form">
          <AutoCompleteApi fetch={this.handleFetch} />
          <AutoCompleteText />
          <DataFetch coord={this.state.coordo} />
      </form>
    )
  }
}

export default Form
