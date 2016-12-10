import React, { PropTypes } from 'react';
import { FlatButton } from 'material-ui';
import { Card, CardActions, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import { GoRepo, GoBrowser } from 'react-icons/lib/go';

const RepoButton = ({ link }) => (
  <FlatButton
    href={link}
    target="_blank"
    label="Open Repo"
    primary
    icon={<GoRepo />}
  />
);

const WebsiteButton = ({ link }) => (
  <FlatButton
    href={link}
    target="_blank"
    label="Open Website"
    primary
    icon={<GoBrowser />}
  />
);

const Project = ({ title, link, description, pic, isWebsite }) => (
  <Card style={{ marginBottom: 20 }}>
    <CardMedia>
      <div style={{ height: 250, overflow: 'hidden' }}>
        <img src={pic} alt={title} style={{ width: '100%' }} />
      </div>
    </CardMedia>
    <CardTitle title={title} />
    <CardText>{description}</CardText>
    {
      link ?
      (<CardActions>
        { isWebsite ? <WebsiteButton link={link} /> : <RepoButton link={link} /> }
      </CardActions>) :
      null
    }
  </Card>
);

Project.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  pic: PropTypes.string.isRequired,
  isWebsite: PropTypes.bool,
};
RepoButton.propTypes = {
  link: PropTypes.string.isRequired,
};
WebsiteButton.propTypes = {
  link: PropTypes.string.isRequired,
};

export default Project;
