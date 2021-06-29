import React from "react";
import renderer from "react-test-renderer";
import PageNotFound from "./PageNotFound";

test("Render PageNotFound", () => {
  const component = renderer.create(<PageNotFound />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
