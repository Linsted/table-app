import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import React, { ReactNode } from "react";

import { getStore } from "./redux/store";

const store = getStore();

type RootProps = {
  children: ReactNode;
};

export const Root: React.FC<RootProps> = ({ children }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  );
};
