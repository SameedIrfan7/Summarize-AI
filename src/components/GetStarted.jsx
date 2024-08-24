import React from 'react';
import { Link } from 'react-router-dom';

const GetStarted = () => {
  return (
    <Link to="/demo">
      <div className="inline-container">
  <button className="black_btnn font-bold">Get Started without login</button>
  {/* <p>Login for more benfits</p> */}
</div>

      
    </Link>
  );
};

export default GetStarted;
