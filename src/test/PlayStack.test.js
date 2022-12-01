
import PlayStack from "../components/playStack";
import renderer from 'react-test-renderer';

test('Check play stack', () => {
  const tree = renderer.create(
    <PlayStack content={[]} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
