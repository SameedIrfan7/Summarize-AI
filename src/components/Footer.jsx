import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <div className="step-container">
      <header className="step-header">
        <h1>Sumz</h1>
        <p>Subscribe to our developer newsletter</p>
        <p>Get tips, technical guides, and best practices. Twice a month. Right in your inbox.</p>
        <button className="step-subscribe-btn">Subscribe</button>
      </header>

      <main className="step-main">
        <section className="step-section">
          <h2>Product</h2>
          <ul>
            <li>Features</li>
            <li>Enterprise</li>
            <li>Copilot</li>
            <li>Security</li>
            <li>Pricing</li>
            <li>Team</li>
            <li>Resources</li>
            <li>Roadmap</li>
            <li>Compare GitHub</li>
          </ul>
        </section>
        <section className="step-section">
          <h2>Platform</h2>
          <ul>
            <li>Developer API</li>
            <li>Partners</li>
            <li>Education</li>
            <li>GitHub CLI</li>
            <li>GitHub Desktop</li>
            <li>GitHub Mobile</li>
          </ul>
        </section>
        <section className="step-section">
          <h2>Support</h2>
          <ul>
            <li>Docs</li>
            <li>Community Forum</li>
            <li>Professional Services</li>
            <li>Premium Support</li>
            <li>Skills</li>
            <li>Status</li>
            <li>Contact GitHub</li>
          </ul>
        </section>
        <section className="step-section">
          <h2>Company</h2>
          <ul>
            <li>About</li>
            <li>Customer stories</li>
            <li>Blog</li>
            <li>The ReadME Project</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Inclusion</li>
            <li>Social Impact</li>
            <li>Shop</li>
          </ul>
        </section>
      </main>

      <footer className="step-footer">
        <p>© 2024 Summarize AI, Inc.</p>
        <ul className="step-footer-links">
          <li>Terms</li>
          <li>Privacy (Updated 08/2022)</li>
          <li>Sitemap</li>
          <li>What is Git?</li>
          <li>Manage cookies</li>
          <li>Do not share my personal information</li>
        </ul>
        <ul className="step-social-links">
          <li><a href="https://twitter.com/github" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a></li>
          <li><a href="https://www.facebook.com/github" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a></li>
          <li><a href="https://www.linkedin.com/company/github" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
