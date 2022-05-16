import React from "react";
import { BrowserRouter, Route, Link,  Routes } from "react-router-dom";
import Body from "./Body"
import UserAuth from "./UserAuth";

// const First = () => <div> <Link to={`/second`}>Go to second Page</Link> </div>
// const Second = () => <div> <Link to={`/`}>Go to First Page</Link></div>


function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="/" element={<First />} /> */}
                <Route path="/" element={<UserAuth />} />
                {/* <Route path="/first" element={<First />} /> */}
                {/* <Route path="/second" element={<Second />} /> */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
