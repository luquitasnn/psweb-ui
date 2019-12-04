import React, { Component} from 'react';
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


class Clients extends Component {
  
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
            <Col md="13">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Clientes</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Nombre</th>
                        <th>DNI</th>
                        <th>Telefono</th>
                        <th>Correo Electronico</th>
                      </tr>
                    </thead>
                    <tbody>
                    { items.map(item => (
                      <tr>
                        <td>Cliente 1</td>
                        <td>33333333</td>
                        <td>1555555555</td>
                        <td>pepito@gmail.com</td>
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

export default Clients;
