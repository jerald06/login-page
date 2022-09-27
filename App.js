import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./component/Auth";
import Table from "./component/table";
import React, { Component } from 'react';


function App() {
    return ( < BrowserRouter >
        <
        Routes >
        <
        Route path = "/"
        element = { < LoginForm / > }
        />

        <
        /Routes> <
        Routes >
        <
        Route path = "/abc"
        element = { < Table / > }
        />  <
        /Routes> <
        /BrowserRouter>
    )
}

export default App;