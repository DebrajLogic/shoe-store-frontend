"use client";

import { Provider } from "react-redux";
import store from "@/provider/redux/store";

function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}

export default ReduxProvider;
