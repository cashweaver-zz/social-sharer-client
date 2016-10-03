import React from 'react';

const Person = ({name}) => (
  <li>
    <span>{name}</span>
  </li>
)

Person.propTypes = {
  name: React.PropTypes.string.isRequired
}

export default Person;
