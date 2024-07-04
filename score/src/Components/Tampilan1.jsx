import React, { useState } from 'react';
import { Container, Row, Col, FormGroup, Label, Input, Button, Card, CardBody } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, useLocation } from 'react-router-dom';

export const Tampilan1 = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [tim1, setTim1] = useState('');
  const [tim2, setTim2] = useState('');
  const [time, setTime] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!tim1) errors.tim1 = 'Nama Tim 1 wajib diisi';
    if (!tim2) errors.tim2 = 'Nama Tim 2 wajib diisi';
    if (!time || time <= 0) errors.time = 'Waktu pertandingan wajib diisi dan harus lebih dari 0 menit';
    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      navigate('/tampilan2', { state: { name: location.state?.name, tim1, tim2, time: parseInt(time) } });
    } else {
      setErrors(errors);
    }
  };

  return (
    <Container fluid style={{ backgroundColor: '#222831', minHeight: '100vh', paddingTop: '100px' }}>
      <h3 className="d-flex justify-content-center mt-5 text-white">{location.state?.name}</h3>
      <Card style={{ width: '100%', marginTop: '50px', backgroundColor: '#222831', border: 'none' }}>
        <CardBody>
          <form onSubmit={handleSubmit}>
            <Row>
              <Col md={5}>
                <FormGroup>
                  <Label for="inputTim1" className="text-white">Masukan Nama Tim 1:</Label>
                  <Input
                    type="text"
                    id="inputTim1"
                    name="inputTim1"
                    onChange={(event) => setTim1(event.target.value)}
                    required
                  />
                  {errors.tim1 && <div className="text-danger">{errors.tim1}</div>}
                </FormGroup>
              </Col>
              <Col md={2} className="d-flex align-items-center justify-content-center">
                <h3 className="text-white">VS</h3>
              </Col>
              <Col md={5}>
                <FormGroup>
                  <Label for="inputTim2" className="text-white">Masukan Nama Tim 2:</Label>
                  <Input
                    type="text"
                    id="inputTim2"
                    name="inputTim2"
                    onChange={(event) => setTim2(event.target.value)}
                    required
                  />
                  {errors.tim2 && <div className="text-danger">{errors.tim2}</div>}
                </FormGroup>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col className="d-flex justify-content-center">
                <FormGroup className="d-flex flex-column align-items-center">
                  <Label for="waktu" className="text-center mb-2 text-white">Masukan Waktu Pertandingan (dalam menit):</Label>
                  <Input
                    type="number"
                    id="waktu"
                    name="waktu"
                    onChange={(event) => setTime(event.target.value)}
                    required
                    min="1"
                  />
                  {errors.time && <div className="text-danger">{errors.time}</div>}
                </FormGroup>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col className="d-flex justify-content-center">
                <Button type="submit" color="primary">Start!</Button>
              </Col>
            </Row>
          </form>
        </CardBody>
      </Card>
    </Container>
  );
};
