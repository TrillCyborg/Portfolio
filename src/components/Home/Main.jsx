import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Contact from './Contact';
import TechList from './TechList';
import Card from '../Card';

const Home = () => (
  <div>
    <div style={{ backgroundColor: 'black', height: 400, marginBottom: 20 }} />
    <Grid>
      <Col sm={9}>
        <Card>
          <div style={{ height: 760 }} />
        </Card>
      </Col>
      <Col sm={3}>
        <Row>
          <Col>
            <Contact />
          </Col>
          <Col>
            <TechList />
          </Col>
        </Row>
      </Col>
    </Grid>
  </div>
);

export default Home;
