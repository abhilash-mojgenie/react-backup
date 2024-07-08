import { Suspense } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/details" element={<div>details</div>} />
      </Routes>
    </Suspense>
  );
}

export default App;
