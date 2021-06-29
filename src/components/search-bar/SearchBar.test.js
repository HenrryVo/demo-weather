import React from "react";
import renderer from "react-test-renderer";
import SearchBar from "./SearchBar";

test("Render SearchBar", () => {
  const dataTest = {
    onChange: jest.fn(),
    onSubmit: jest.fn(),
  };

  const component = renderer.create(<SearchBar {...dataTest} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
