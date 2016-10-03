import React from 'react';
import renderer from 'react-test-renderer';

import PersonForm from '../PersonForm';

it('renders correctly', () => {
  const addPerson = () => {};

  const tree = renderer.create(
    <PersonForm
      addPerson={addPerson}/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});


