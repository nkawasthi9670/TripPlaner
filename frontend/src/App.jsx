import { useState, useEffect } from 'react';
import './App.css';

import HomePage from './page/HomePage';
import Plan from './page/Plan';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // Shared mode state

  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    if (mode === 'dark') {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    }
  }, [mode]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Plan mode={mode} toggleMode={toggleMode} />} />
        <Route path="/home" element={<HomePage mode={mode} toggleMode={toggleMode} />} />
      </Routes>
    </Router>
  );
}

export default App;
