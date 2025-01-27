import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import Header from './components/Header/Header';
import AboutPage from './pages/AboutPage/AboutPage';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/about" element={<AboutPage />}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
