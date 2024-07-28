import React from 'react';
import justlogo from '../assets/justlogo.svg';

const Footer = () => {
  return (
    <footer className="footer bg-transparent text-gray-800 py-8 w-full flex flex-col items-center">
      <div className="w-full max-w-7xl px-6">
        <div className="footer-top flex flex-col md:flex-row justify-between items-start space-y-4 md:space-y-0 md:space-x-8">
          <div className="footer-logo">
            <img src={justlogo} alt="Logo" className="w-28 object-contain" />
          </div>
          <div className="footer-nav flex flex-col space-y-2">
            <a href="/about" className="hover:underline">About Us</a>
            <a href="/services" className="hover:underline">Services</a>
            <a href="/blog" className="hover:underline">Blog</a>
            <a href="/contact" className="hover:underline">Contact</a>
          </div>
          <div className="footer-legal flex flex-col space-y-2">
            <a href="/privacy" className="hover:underline">Privacy Policy</a>
            <a href="/terms" className="hover:underline">Terms of Service</a>
            <a href="/cookies" className="hover:underline">Cookies Policy</a>
          </div>
          <div className="footer-subscribe flex flex-col space-y-2">
            <h3 className="text-lg font-semibold">Subscribe to our newsletter</h3>
            <form className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="border border-gray-300 px-2 py-1 rounded"
                aria-label="Email"
              />
              <button type="submit" className="black_btn">Subscribe</button>
            </form>
          </div>
          <div className="footer-social flex space-x-4">
            <button
              type="button"
              onClick={() => window.open("https://www.facebook.com", "_blank")}
              className="black_btn"
            >
              Facebook
            </button>
            <button
              type="button"
              onClick={() => window.open("https://www.twitter.com", "_blank")}
              className="black_btn"
            >
              Twitter
            </button>
            <button
              type="button"
              onClick={() => window.open("https://www.linkedin.com", "_blank")}
              className="black_btn"
            >
              LinkedIn
            </button>
            <button
              type="button"
              onClick={() => window.open("https://www.instagram.com", "_blank")}
              className="black_btn"
            >
              Instagram
            </button>
          </div>
        </div>
        <div className="footer-bottom mt-8 flex flex-col md:flex-row justify-between items-center md:items-start">
          <div className="footer-contact mb-4 md:mb-0">
            <p>Email: <a href="mailto:sameedirfan@gmail.com" className="hover:underline">sameedirfan@gmail.com</a></p>
            <p>Phone: +91 911-044-3938</p>
            <p>Address: Mysuru, Karnataka, India</p>
          </div>
          <div className="footer-rights text-center md:text-right">
            <p>© 2024 ArticleSum. All rights reserved.</p>
            <button
              type="button"
              onClick={() => window.open("https://github.com/SameedIrfan7", "_blank")}
              className="black_btn mt-2"
            >
              GitHub
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
