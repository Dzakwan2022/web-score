import React from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button, Card, CardBody } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Inputtim = () => {
  return (
    <Container fluid style={{ backgroundColor: '#222831', minHeight: '100vh', paddingTop:'100px'}}>
      <h3 className="d-flex justify-content-center mt-5 text-white" >JUDUL PERTANDINGAN</h3>
      <Card style={{ width: '100%', marginTop: '50px', backgroundColor: '#222831' , border:'none'}}>
        <CardBody>
          <Form>
            <Row>
              <Col md={5}>
                <FormGroup>
                  <Label for="inputTim1" className="text-white">Masukan Nama Tim 1:</Label>
                  <Input type="text" id="inputTim1" name="inputTim1" />
                </FormGroup>
              </Col>
              <Col md={2} className="d-flex align-items-center justify-content-center">
                <h3 className="text-white">VS</h3>
              </Col>
              <Col md={5}>
                <FormGroup>
                  <Label for="inputTim2" className="text-white">Masukan Nama Tim 2:</Label>
                  <Input type="text" id="inputTim2" name="inputTim2" className="text-white" />
                </FormGroup>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col className="d-flex justify-content-center">
                <FormGroup className="d-flex flex-column align-items-center">
                  <Label for="waktu" className="text-center mb-2 text-white">Masukan Waktu Pertandingan:</Label>
                  <Input type="time" id="waktu" name="waktu" />
                </FormGroup>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col className="d-flex justify-content-center">
                <Button type="submit" color="primary">Start!</Button>
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>
    </Container>
  );
}

export default Inputtim;
