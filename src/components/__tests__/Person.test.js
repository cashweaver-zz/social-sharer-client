import React from 'react';
import renderer from 'react-test-renderer';

import Person from '../Person';

it('renders correctly', () => {
  const person = {
    name: 'Cat'
  };

  const tree = renderer.create(
    <Person {...person}/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});


