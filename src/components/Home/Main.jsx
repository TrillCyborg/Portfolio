import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Contact from './Contact';
import TechList from './TechList';
import Bio from './Bio';
import Project from '../Project';
import projects from './projects.const.json';

const Home = () => {
  function getProjects() {
    return projects.map(({ title, link, description, isWebsite }) => (
      <Project title={title} link={link} isWebsite={isWebsite} description={description} pic="http://www.rd.com/wp-content/uploads/sites/2/2016/02/06-train-cat-shake-hands.jpg" />
    ));
  }

  return (
    <div>
      <div style={{ marginBottom: 20 }} />
      <Grid>
        <Col sm={8}>
          <Bio />
          {getProjects()}
        </Col>
        <Col sm={4}>
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
};

export default Home;
