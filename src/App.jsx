import Hero from "./components/Hero";
import Demo from "./components/Demo";

import React from "react";
import { KindeProvider } from "@kinde-oss/kinde-auth-react";

import "./App.css";
import Footer from "./components/Footer";

const App = () => {
  return (
    <KindeProvider
      clientId="a572ad2c3c984ce5b66c5aed2a4ec89d"
      domain="https://articlesum.kinde.com"
      redirectUri="http://localhost:5173"
      logoutUri="http://localhost:5173"
    >
      <div className="main">
        <div className="gradient" />
      </div>

      <div className="app">
        <Hero />
        <Demo />
        <Footer />
      </div>
    </KindeProvider>
  );
};

export default App;

