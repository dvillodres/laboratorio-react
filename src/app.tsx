import React from "react";
import {RouterComponent} from "@/core";
import {SearchContextProvider} from "@/pods/core";


export const App = () => {
  return (
      <SearchContextProvider>
        <RouterComponent/>
      </SearchContextProvider>
  );
};
