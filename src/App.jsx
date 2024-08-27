import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './components/Hero';
import Demo from './components/Demo';
import GetStarted from './components/GetStarted';
import ImageGallery from './components/ImageGallery';
import Footer from './components/Footer';
import VismeForm from './components/VismeForm';
import { Auth0Provider } from '@auth0/auth0-react';

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
            <Route path="/demo" element={<Demo />} />
          </Routes>
        </div>
      </main>
      <VismeForm />  
      <Footer />
    </>
  );
};

export default function WrappedApp() {
  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <Router>
        <App />
      </Router>
    </Auth0Provider>
  );
}