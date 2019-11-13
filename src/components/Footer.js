import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom'

import { SocialIcon } from 'react-social-icons';

function Footer() {
  return (
    <div>
         
      <div className="row">
     
        
          

            <div className="one">
              
               <Link to="/about">A propos</Link>
              
              <a href="">Contact</a>
            </div>


    
   <div className="titre">
     <h4> Rejoins-nous </h4> 
        <div className="icons">
    
          <SocialIcon url="https://twitter.com/plume_labs?lang=fr" />
          <SocialIcon url="https://www.linkedin.com/company/plume-labs/?originalSubdomain=fr" />
          <SocialIcon url="https://www.instagram.com/plume_labs/" />
        </div> 
        </div>
        <div className="two">
              <a href="">FAQ</a>
              <a href="https://plumelabs.com/fr/">Plumelab</a>

            </div>
      </div>
    </div>
  );
}

export default Footer;