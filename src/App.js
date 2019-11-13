import React from 'react'
import { withRouter, Switch, Route, Link } from 'react-router-dom'

import Home from './screen/Home'
import ResultPage from './screen/Result-page'
import About from './screen/About'
import Footer from './components/Footer'
import Faq from './screen/Faq'
import Contact from './screen/Contact'

import './App.css'
 

class App extends React.Component {
  state = {
    result: '',
    splash: true,
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ splash: false })
    }, 3000)
  }

  routeChange = () => {
    const path = 'resultpage'
    this.props.history.push(path)
  }

  handleResult = data => {
    this.setState({ result: data }, () => {
      console.log('from state App: ', this.state.result)
      console.log('from App: ', data)
      this.routeChange()
    })
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
            <Home data={this.handleResult} />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/resultpage">
            <ResultPage data={this.state.result} />
          </Route>
          <Route exact path="/Faq">
            <Faq />
          </Route>
          <Route exact path="/Contact">
            <Contact/>
          </Route>
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default withRouter(App)
