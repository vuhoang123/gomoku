import React from 'react';
import Board from '../components/board';
import renderer from 'react-test-renderer';

test('Board', () => {
  const tree = renderer.create(
    <Board />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
