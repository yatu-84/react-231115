import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page1 from './page1'; // ファイル名が page1.js から Page1.js に変わっていると仮定
import Page2 from './page2';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/react-231115" element={<Page1 />} />
          <Route path="/react-231115/page2" element={<Page2 />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
