import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import Home from './screen/Home'
import ResultPage from './screen/Result-page'
import About from './screen/About'
import Footer from './components/Footer'
import './App.css'

class App extends React.Component {
  state = {
    result: [],
    splash: true,
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ splash: false })
    }, 3000)
  }

  handleResult = data => {
    this.setState({ result: data })
  }

  render() {
    if (this.state.splash) {
      return <div className="splash"></div>
    }
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
