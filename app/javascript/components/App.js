import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./Body"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Body />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
