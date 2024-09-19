import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext";
import AllRoutes from './Routes/AllRoutes';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <BrowserRouter>
      <AllRoutes />
    </BrowserRouter>
  </AuthProvider>
);
