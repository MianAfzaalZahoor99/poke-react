import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./app/store";

test("renders loading and placeholder messages", async () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const loadingMessage = await screen.findByText(/Loading.../i);
  expect(loadingMessage).toBeInTheDocument();

  const placeholderMessage = screen.getByText(
    /Select a Pokemon to see details/i
  );
  expect(placeholderMessage).toBeInTheDocument();
});
