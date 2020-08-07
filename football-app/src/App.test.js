import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';


describe("Layout should work correctly", () => {
  test("Competition Page should display correct title", () => {
    const { getByTestId } = render(<App />);
    const mainpageTitle = getByTestId("main-title");
    expect(mainpageTitle).toBeInTheDocument();
  });

  test("Should redirect Favorites Page", () => {
    const { getByTestId } = render(<App />);
    const linkToFavorite = getByTestId("favorite-link");
    fireEvent.click(linkToFavorite);
    const favoritepageTitle = getByTestId("favorite-title");
    expect(favoritepageTitle).toBeInTheDocument();
  });
});