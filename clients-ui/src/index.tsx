import React from 'react';
import ReactDom from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./app";
import "./scss/styles.scss";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
    <App />
    < /React.StrictMode>
);
