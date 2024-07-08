import axios from "axios";
import "./App.css";
import { Suspense, useEffect, useState } from "react";
import Header from "./components/Header";
import Tables from "./components/Tables";
import Interaction from "./components/Interaction";
import Pagination from "./components/Pagination";
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Details from "./pages/Details";

/// use state is an hook tells about the current situation ofthe variable associated with it
//props are arguments tht can be accessed in react component

function App() { 
    return (
        <Suspense>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/details/:id" element={<Details/>} />
            </Routes>
        </Suspense>
    )
}

export default App;
