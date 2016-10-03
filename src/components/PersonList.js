import React from 'react';

import Person from './Person';
import PersonForm from './PersonForm';

const PersonList = ({persons, addPerson}) => (
  <ul>
    <PersonForm addPerson={addPerson}/>
    {persons.map((person, i) => (
      <Person {...person} key={i}/>
    ))}
  </ul>
)

PersonList.propTypes = {
  persons: React.PropTypes.arrayOf(React.PropTypes.shape({
    name: React.PropTypes.string,
    facebook: React.PropTypes.string,
    twitter: React.PropTypes.string,
    github: React.PropTypes.string,
    linkedIn: React.PropTypes.string
  })).isRequired,
  addPerson: React.PropTypes.func.isRequired
}

export default PersonList;
