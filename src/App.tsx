import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import ExpenseInputPage from './components/ExpenseInputPage';
import ExpenseListPage from './components/ExpenseListPage';
import AdSenseComponent from './components/AdSenseComponent';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#ffffff]">
        <AdSenseComponent />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/input/:category" element={<ExpenseInputPage />} />
          <Route path="/list" element={<ExpenseListPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;