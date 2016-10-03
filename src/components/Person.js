import React from 'react';

const Person = ({name, facebook, twitter, github, linkedIn}) => (
  <li>
    <p>{name}</p>
    <ul>
      {facebook ? <li>Facebook: {facebook}</li>: ''}
      {twitter ? <li>Twitter: {twitter}</li>: ''}
      {github ? <li>Github: {github}</li>: ''}
      {linkedIn ? <li>LinkedIn: {linkedIn}</li>: ''}
    </ul>
  </li>
)

Person.propTypes = {
  name: React.PropTypes.string.isRequired,
  facebook: React.PropTypes.string,
  twitter: React.PropTypes.string,
  github: React.PropTypes.string,
  linkedIn: React.PropTypes.string
}

export default Person;
