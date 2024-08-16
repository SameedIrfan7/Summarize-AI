import Hero from "./components/Hero";
import Demo from "./components/Demo";
const kindekey = import.meta.env.VITE_KINDE_CLIENT_ID;


import React from "react";
import { KindeProvider } from "@kinde-oss/kinde-auth-react";

import "./App.css";
import Footer from "./components/Footer";

const App = () => {
  return (
      <main>
      <div className="main">
        <div className="gradient" />
      </div>

      <div className="app">
        <Hero />
        <Demo />
        <Footer />
      </div>
      </main>
  );
};

export default App;

