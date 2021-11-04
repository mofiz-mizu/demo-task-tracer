import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { render } from "@testing-library/react";
import About from "./components/About";
import Contact from "./components/Contact";

const rootElement = document.getElementById("root");

// ReactDOM.render(
//   <BrowserRouter>
//     {/* <React.StrictMode> */}
//       <App />
//     {/* </React.StrictMode> */}
//   </BrowserRouter>,

//   document.getElementById("root")
// );
render(
  <BrowserRouter>
    {/* <App /> */}
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
