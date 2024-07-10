// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import UploadComponent from './components/UploadComponent';
import OutputComponent from './components/OutputComponent';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/upload" element={<UploadComponent />} />
      <Route path="/output" element={<OutputComponent />} />
    </Routes>
  </Router>
);

export default App;