import React from 'react';
import Board from '../components/board';
import renderer from 'react-test-renderer';

describe('Board', () => {

  it('matches snapshot', () => {

    const tree = renderer.create(
      <Board />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

});
