import TurnBar from '../components/turnbar';
import renderer from 'react-test-renderer';

test('Turnbar', () => {

  const tree = renderer.create(
    <TurnBar turn={'X'} winner={'X'} reset={() => { }} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
