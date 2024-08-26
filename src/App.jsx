import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './components/Hero';
import Demo from './components/Demo';
import GetStarted from './components/GetStarted';
import ImageGallery from './components/ImageGallery';
import Footer from './components/Footer';
import VismeForm from './components/VismeForm'; // Import your component

import './App.css';
import './lobal.css';

const App = () => {
  return (
    <>
      <main className="main-content">
        <div className="gradient"></div>
        <div className="app">
          <Hero />
          <Routes>
            <Route path="/" element={
              <>
                <GetStarted />
                <ImageGallery />
              </>
            } />
            <Route path="/demo" element={
              <Demo />
            } />
          </Routes>
        </div>
      </main>
      <VismeForm />  
      <Footer />
    </>
  );
};

export default function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
