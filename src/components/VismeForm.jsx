import React, { useEffect } from 'react';

const VismeForm = () => {
  useEffect(() => {
    // Load the Visme script
    const script = document.createElement('script');
    script.src = "https://static-bundles.visme.co/forms/vismeforms-embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="visme_d"
         data-title="Expert Blog Subscription"
         data-url="31njdveq-expert-blog-subscription"
         data-domain="forms"
         data-full-page="false"
         data-min-height="500px"
         data-form-id="89825">
    </div>
  );
};

export default VismeForm;
