import React from 'react';
import { step1, step2, step3 } from "../assets";

function Steps() {
  return (



    <div className="container">
      
      <div className="cards">
        <div className="card">
          <div className="icon">
            <img src={step1} alt="Graduation Cap" />
          </div>
          <h2>Create your Account</h2>
          <p>Customize your experience with a free account or go Pro for even more power.</p>
        </div>
        <div className="card">
          <div className="icon">
            <img src={step2} alt="Open Book" />
          </div>
          <h2>Get started with any link</h2>
          <p>In just two steps, Summarize AI refines the content, giving you quick, concise summaries tailored to your needs.</p>
        </div>
        <div className="card">
          <div className="icon">
            <img src={step3} alt="Building" />
          </div>
          <h2>Results</h2>
          <p>Get instant results with Summarize AI. Simply enter your URL, and in seconds, you'll have a concise, easy-to-digest summary that delivers the key insights without the clutter.</p>
        </div>
      </div>
    </div>
  );
}

export default Steps;
