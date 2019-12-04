import React, { Component} from 'react';
import logo from './appicon_v24_full.png';
import './App.css';


// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";

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
        <div className="App">
        <header className="App-header">
          <img src={logo} alt="logo" />
          <h2>
            New ProcuSmart Web
          </h2>
          <h2>
            Loading...
          </h2>
        </header>
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
        
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Casos</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Expediente</th>
                        <th>Autos</th>
                        <th>Fuero</th>
                        <th>Tribunal</th>
                      </tr>
                    </thead>
                    <tbody>
                    { items.map(item => (
                      <tr>
                        <td>{item.n_expte}</td>
                        <td>{item.autos}</td>
                        <td>{item.fuero}</td>
                        <td>{item.tribunal}</td>
                      </tr>
                     ))} 
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      );
    }
  }
}

export default Cases;
