import React, { useState, useEffect} from 'react';
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

function CaseDetail ({match }) {
  
  useEffect (() => {
      fetchCase();
      console.log(match);
  }, []);

  const [ caseDetail, setCase] = useState({});

  const fetchCase = async () => {
      const fetchCase = await fetch (`https://procusmart-web-api.herokuapp.com/api/v1/cases/${match.params.id}`);
      const caseDetail = await fetchCase.json();
      setCase (caseDetail);
      console.log(caseDetail);
  };
  
  return (
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Detalle del Caso</CardTitle>
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
                      <tr>
                        <td >{caseDetail.n_expte}</td>
                        <td>{caseDetail.autos}</td>
                        <td>{caseDetail.fuero}</td>
                        <td>{caseDetail.tribunal}</td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
  ) 
}

export default CaseDetail;
