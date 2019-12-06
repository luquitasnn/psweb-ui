import React from 'react';
import './App.css';
import Nav from './Nav.js'
import Cases from './Cases.js'
import Clients from './Clients.js'
import CaseDetail from './CaseDetail.js'

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 

function App() {
  return ( 
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/cases" exact component={Cases}/>
          <Route path="/clients"  component={Clients}/>
          <Route path="/agenda"  component={Agenda}/>
          <Route path="/cases/:id"  component={CaseDetail}/>

        </Switch>
      </div>
    </Router>
  );
}

const HomePage = () => (
  <div>
    <div className="cardColor">
      <h2>Bienvenido a Procusmart Web, Messi</h2>
    </div>
    <div className="inlineWidgets">
      <div className="card">     
        <h3>Ultimas acciones</h3>

        <p className="itemColor">Cracion de Caso X</p>
        <p className="itemColor">Nuevo Cliente Pep</p>
        <p className="itemColor">Nuevo Movimiento en Caso X</p>
      </div>
      <div className="card">
        <h3>Proximos eventos</h3>

        <p className="itemColor">Evento Caso 111/2020 - Tribunal I</p>
        <p className="itemColor">Evento Caso 321/2020	- Reunion cliente</p>
        <p className="itemColor">Evento Caso 555/2030	- Consulta de fuero</p>
      </div>
      </div>  
  </div>
);

const Agenda = () => (
  <div className="cardColor">
    <h3>Agenda</h3>
  </div>
);

export default App;
