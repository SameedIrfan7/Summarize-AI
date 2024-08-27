import React, { useEffect } from 'react';

const VismeForm = () => {
  useEffect(() => {
    // Load the Visme script only once
    const existingScript = document.querySelector('script[src="https://static-bundles.visme.co/forms/vismeforms-embed.js"]');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = "https://static-bundles.visme.co/forms/vismeforms-embed.js";
      script.async = true;
      document.body.appendChild(script);

      // Cleanup script if component unmounts
      return () => {
        document.body.removeChild(script);
      };
    }

    // If script is already loaded, re-initialize the form if necessary
    if (window.VismeForms && window.VismeForms.init) {
      window.VismeForms.init();
    }
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