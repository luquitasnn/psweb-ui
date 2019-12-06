import React from 'react'
import logo from './appicon_v24.png';


function Nav () {
    return(
      <nav>
        <ul>
          <li><img src={logo} alt="logo" /></li>
          <li><a href="/">Inicio</a></li>
          <li><a href="/cases">Casos</a></li>
          <li><a href="/clients">Clientes</a></li>
          <li><a href="/agenda">Agenda</a></li>
          <li className="leftli"><a href="about.asp">Preferencias</a></li>
        </ul>
      </nav>
    )
}

export default Nav;

