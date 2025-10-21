import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';

export default function App() {
    return ( <
        BrowserRouter >
        <
        nav style = {
            { padding: 10 } } >
        <
        Link to = "/register"
        style = {
            { marginRight: 10 } } > Register < /Link> <
        Link to = "/login" > Login < /Link> <
        /nav> <
        Routes >
        <
        Route path = "/register"
        element = { < Register / > }
        /> <
        Route path = "/login"
        element = { < Login / > }
        /> <
        Route path = "/"
        element = { < div > Homepage - chèn nội dung đồ án ở đây < /div>} / >
            <
            /Routes> <
            /BrowserRouter>
        );
    }