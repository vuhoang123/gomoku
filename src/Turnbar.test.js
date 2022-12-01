import React from 'react';
import TurnBar from './components/turnbar';
import renderer from 'react-test-renderer';

describe('Turnbar', () => {

  it('matches snapshot', () => {

    const tree = renderer.create(
      <TurnBar turn={'X'} winner={'X'} reset={() => { }} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

});
