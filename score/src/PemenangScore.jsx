import React from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button, Card, CardBody } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const PemenangScore = () => {
  return (
<Container fluid style={{ backgroundColor: '#222831', minHeight: '100vh', paddingTop:'200px'}}>
  <Card style={{ width: '100%', marginTop: '50px', backgroundColor: '#222831' , border:'none'}}>

    <div className='text-white text-center' >
      <h3>
      Pertandingan 
      $judulPertandingan 
      dimenangkan oleh $namaPemenang dengan score 
      $hasilScore1 - $hasilScore2 dan
      jumlah foul tim a : 
      $foul1 - tim b : $foul2 
      </h3>
            <Row className="mt-4">
              <Col className="d-flex justify-content-center">
                <Button type="submit" color="primary">Start!</Button>
              </Col>
            </Row>
    </div>
    </Card>
</Container>
  );
}

export default PemenangScore;