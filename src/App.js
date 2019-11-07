import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'

import Home from './screen/Home'
import ResultPage from './screen/Result-page'
import About from './screen/About'
import Footer from './components/Footer'

class App extends React.Component {
  state = {
    result: [],
  }

  handleResult = data => {
    this.setState({ result: data })
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
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/resultpage" data={this.handleResult}>
            <ResultPage />
          </Route>
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default App
