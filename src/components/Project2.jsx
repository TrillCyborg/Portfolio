import React, { PropTypes } from 'react';
import { Col } from 'react-bootstrap';
import { FlatButton } from 'material-ui';
import { GoRepo } from 'react-icons/lib/go';
import Card from './Card';

const styles = {
  card: {
    height: 250,
  },
  pic: {
    backgroundColor: 'green',
    height: 220,
    marginTop: 15,
  },
  title: {
    display: 'inline-block',
  },
  repoButton: {
    float: 'right',
    top: 14,
  },
};

const Project = ({ title, repo, description }) => (
  <Card>
    <div style={styles.card}>
      <Col sm={4}>
        <div style={styles.pic} />
      </Col>
      <Col sm={8}>
        <h3 style={styles.title}>{title}</h3>
        <FlatButton
          style={styles.repoButton}
          href={repo}
          target="_blank"
          label="Open Repo"
          primary
          icon={<GoRepo />}
        />
        <p>{description}</p>
      </Col>
    </div>
  </Card>
);

Project.propTypes = {
  title: PropTypes.string.isRequired,
  repo: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Project;
