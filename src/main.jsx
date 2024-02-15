import React from "react";
import { DataProvider } from "./context/DataContext";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <Theme grayColor="sand" radius="large">
   <DataProvider>
       <App />
   </DataProvider>
     </Theme>
  </React.StrictMode>
);
