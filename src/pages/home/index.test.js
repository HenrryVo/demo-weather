import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Home from "./index";

const datadTest = {
  city:"hanoi",
  list: [{
    date: "06/29/2021",
    day: "Tuesday",
    tempMin: "26",
    tempMax: "30",
  }],
};
let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders user data", async () => {
  const fakeData = {
    status: true,
    res: [datadTest],
  };

  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeData),
    })
  );

  await act(async () => {
    render(<Home />, container);
  });

  expect(container.textContent).toContain("Loading...");
  global.fetch.mockRestore();
});
