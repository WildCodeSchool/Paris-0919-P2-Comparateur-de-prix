import React from 'react'
import DataFetch from './components/DataFetch'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from 'react-router-dom'

export default function App() {
  return (
    <Router>
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
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

function Home() {
  return (
    <>
      <h2>Accueil</h2>
      <DataFetch />
    </>
  )
}

function About() {
  return (
    <>
      <h2>à propos</h2>
      <div>
        <p>
          Nous couvrons les principaux polluants importants pour votre
          santé: PM2.5, PM10, NO2 et O3.
        </p>
        <p>
          Les particules (PM2,5 et PM10) sont de petites particules
          solides provenant d'activités humaines, telles que la
          circulation et la combustion, et de phénomènes naturels,
          tels que les éruptions volcaniques. Ils pénètrent dans les
          voies respiratoires, les poumons et, dans le cas des plus
          petites particules, même dans les vaisseaux sanguins. Cela
          peut être responsable de maladies cardiovasculaires et
          respiratoires, ainsi que de cancers du poumon.
        </p>
        <p>
          Le dioxyde d'azote (NO2) est un gaz de couleur rouge-brun
          suffocant et irritant qui provient principalement de la
          combustion, dont 50% est dû au trafic routier. Il provoque
          une bronchite, de l'asthme et d'autres maladies
          respiratoires.
        </p>
        <p>
          L'ozone (O3) est un gaz formé par une réaction chimique
          entre d'autres polluants. Sa concentration est élevée
          lorsque la lumière du soleil et le trafic intense sont
          combinés. Il est responsable de maladies respiratoires et
          cardiaques, d'asthme et d'irritations oculaires.
        </p>
      </div>
    </>
  )
}
