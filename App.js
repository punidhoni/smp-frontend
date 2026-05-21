import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AddMarks from './pages/AddMarks';
import Search from './pages/Search';
import Reports from './pages/Reports';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/add' element={<AddMarks />} />
        <Route path='/search' element={<Search />} />
        <Route path='/reports' element={<Reports />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
