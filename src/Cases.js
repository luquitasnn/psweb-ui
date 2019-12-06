import React, { Component} from 'react';
import logo from './appicon_v24.png';
import './App.css';
import { Link } from 'react-router-dom';


class Cases extends Component {
  
  constructor (props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount() {

    fetch ('https://procusmart-web-api.herokuapp.com/api/v1/cases')
      .then(res => res.json())
      .then(json => {
        console.log (json)
        this.setState ({
          isLoaded: true,
          items: json,  
        })
      })
  }

  render() {

    var { isLoaded, items } = this.state;

    if (!isLoaded) {
      return (
        <div className="loading">
          <h2>
            Loading...
          </h2>
          <img src={logo} alt="logo" />
      </div>
      );
    }

    else {
      return (
        
        /*<div className="root">
            <p>
              New ProcuSmart Web
            </p>
            <ul>
              { items.map(item => (
                <li key={item.id}>
                  <a href="#">
                    Expediente: {item.n_expte} | Autos: {item.autos}
                  </a>
                </li>
              ))}
            </ul>
        </div>*/
        
        <div className="card">
        <ul>
          <li><h3>Casos</h3></li>
          <li className="leftli"><button className="buttonAdd">Nuevo</button></li>
        </ul>
        
        

        { items.map(item => (
                      <p className="itemColor">
                        <Link to={`/cases/${item.id}`}> <b>{item.n_expte} </b> {item.autos} </Link>
                      </p>
        ))} 
      </div>
      );
    }
  }
}

export default Cases;
