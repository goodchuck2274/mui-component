import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Home from "./home";
import SortingTable from "./sortingTable";
import DropZone from "./dropZone";
import CopyToClipboard from "./copyToClipboard";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route path="/" element={<Home />} />
          <Route path="/sortingTable" element={<SortingTable />} />
          <Route path="/dropZone" element={<DropZone />} />
          <Route path="/copyToClipboard" element={<CopyToClipboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
