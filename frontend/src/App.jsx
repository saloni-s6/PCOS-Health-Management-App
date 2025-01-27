import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';

function App() {
  return (
    <div>
      <header>
        <h1>PCOS Health Management App</h1>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
