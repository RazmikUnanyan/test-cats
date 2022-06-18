import React from 'react';
import {Routes, Route,} from "react-router-dom";
import {withLayout} from "./layout/Layout";
import Cats from "./pages/Cats/Cats";

function App() {


    return (
        <Routes>
            <Route path="/">
                <Route path=":categoryId" element={<Cats/>}/>
            </Route>
        </Routes>
    );
}

export default withLayout(App);
