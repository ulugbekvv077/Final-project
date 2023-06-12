import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ContextProvider } from "./context";
import { CartProvider } from "react-use-cart";
import { CookiesProvider } from "react-cookie";
import "react-toastify";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <CookiesProvider>
      <ContextProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ContextProvider>
    </CookiesProvider>
  </BrowserRouter>
);
