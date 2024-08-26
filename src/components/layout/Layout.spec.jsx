import React from "react";
import { Layout } from "./Layout";
// import { Header } from 'components/Header';
// import { MessageField } from "components/MessageField";
// import { MessagesList } from "components/MessagesList";

import renderer from "react-test-renderer";


test('Sum a+b', () =>
  expect(4 + 4).toBe(8)
);


test('Layout should be rendered', () => {
  const tree = renderer.create(
    <Layout/>
  ).toJSON();

  expect(tree).toMatchSnapshot();
}
)