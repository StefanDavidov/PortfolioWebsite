import React, { useEffect } from 'react';

export default function LinkedinBadge() {
    useEffect(() => {
      const script = document.createElement('script');
  
      script.src = 'https://platform.linkedin.com/badges/js/profile.js';
      script.async = true;
      script.defer = true;
  
      document.body.appendChild(script);
  
      return () => {
        document.body.removeChild(script);
      };
    }, []);
  
    return (
      <div>
        <div className="badge-base LI-profile-badge" 
        data-locale="en_US" data-size="large" 
        data-theme="light" data-type="HORIZONTAL" 
        data-vanity="stefan-davidov" data-version="v1">
            <a className="badge-base__link LI-simple-link" 
            href="https://www.linkedin.com/in/stefan-davidov?trk=profile-badge">
                </a>
        </div>
                
      </div>
    );
  }
  