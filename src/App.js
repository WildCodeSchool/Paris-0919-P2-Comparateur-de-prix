import React from 'react'
import { withRouter, Switch, Route, Link } from 'react-router-dom'

import Home from './screen/Home'
import ResultPage from './screen/Result-page'
import About from './screen/About'
import Footer from './components/Footer'

class App extends React.Component {
  state = {
    result: '',
  }

  routeChange = () => {
    const path = 'resultpage'
    this.props.history.push(path)
  }

  handleResult = data => {
    this.setState({ result: data }, ()=>{
      console.log("from state App: ", this.state.result)
      console.log("from App: ", data)
      this.routeChange()
    })
  }

  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/about">à propos</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/">
            <Home data={this.handleResult}/>
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/resultpage">
            <ResultPage data={this.state.result}/>
          </Route>
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default withRouter(App)
