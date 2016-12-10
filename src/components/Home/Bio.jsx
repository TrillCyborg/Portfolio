import React from 'react';
import { Col } from 'react-bootstrap';
import Card from '../Card';

// TODO: NEEDS LOTS OF WORK

const profilePic = 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xat1/v/t1.0-1/p160x160/13892066_1689982057685048_7847739311645273433_n.jpg?oh=276fbaa56333ef7ee32a4f7992736e93&oe=589901B9&__gda__=1486771413_79fbfb156540a732d47e334ed6177b54';
const styles = {
  card: {
    height: 230,
  },
  pic: {
    backgroundColor: 'green',
    height: 200,
    borderRadius: 100,
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

const Bio = () => (
  <Card>
    <div style={styles.card}>
      <Col sm={4}>
        <img style={styles.pic} src={profilePic} alt="My Pic" />
      </Col>
      <Col sm={8}>
        <h3 style={styles.title}>Full Stack Developer</h3>
        <p>I am a young and ambitious developer with a love for innovation. I started coding at the age of 14 in C. After high school, I pursued an internship at Glide which turned into a full time position as a server developer. While there I discovered my love for web development which has driven me to constantly learn the newest and coolest web technologies. My favorite and most fluent language is JavaScript which I am always coding something in.</p>
      </Col>
    </div>
  </Card>
);

export default Bio;
