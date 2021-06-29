import React from "react";
import renderer from "react-test-renderer";
import CardView from "./CardView";

test("Render CardView", () => {
  const dataTest = {
    data: {
      date: "06/29/2021",
      day: "Tuesday",
      tempMin: "26",
      tempMax: "30",
    },
  };

  const component = renderer.create(<CardView {...dataTest} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
