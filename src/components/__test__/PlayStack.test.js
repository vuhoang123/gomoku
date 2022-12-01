
import PlayStack from "../playStack";
import renderer from 'react-test-renderer';

describe('Check play stack', () => {
  it('should return an empty stack', () => {

    const tree = renderer.create(
      <PlayStack content={[]} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
