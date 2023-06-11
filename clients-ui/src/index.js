import React from 'react';
import ReactDom from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./app";
import "./scss/styles.scss";

const appRouting = (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" Component={App} />
        </Routes>
    </BrowserRouter>
);

ReactDom.render(appRouting, document.getElementById("root"))