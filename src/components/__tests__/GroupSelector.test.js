import React from 'react';
import renderer from 'react-test-renderer';


import GroupSelector from '../GroupSelector';

it('renders correctly', () => {
  const tree = renderer.create(
    <GroupSelector />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

// TODO
xit('redirects to a specific group', () => {
});


