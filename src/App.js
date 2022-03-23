import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CalculatorPage from './components/pages/CalculatorPage';
import HomePage from './components/pages/HomePage';
import QuotePage from './components/pages/QuotePage';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/calculator" element={<CalculatorPage />} />
        <Route path="/quote" element={<QuotePage />} />
      </Routes>
    );
  }
}
