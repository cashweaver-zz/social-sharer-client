import React from 'react';
import renderer from 'react-test-renderer';

import PersonList from '../PersonList';

it('renders correctly', () => {
  const persons = [
    {name: 'Cat'}
  ];

  const addPerson = () => {};

  const tree = renderer.create(
    <PersonList
      persons={persons}
      addPerson={addPerson}/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});


