import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ServicePage from './pages/ServicePage';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios/:serviceId" element={<ServicePage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;