import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tasks from './components/tasks';

function App() {
  const headStyle = {
    textAlign: "center",
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#4A90E2",
    margin: "20px 0",
    textShadow: "1px 1px 2px #333",
  };

  const containerStyle = {
    padding: "20px",
    backgroundColor: "#f8f9fa",
    minHeight: "100vh",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headStyle}>Tasks List</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Tasks/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
