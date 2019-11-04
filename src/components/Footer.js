import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div>
      <div className="row">       
          <div className="outils-left">
            <ul>             
              <li>Contact</li>
              <li>FAQ</li>
              <li>Plumelab</li> 
            </ul> 
          </div>
          <div className="outils-right">
            <ul>                  
              <li><a href="https://fr-fr.facebook.com/" rel="facebook">Facebook</a></li>
              <li><a href="https://fr.linkedin.com" rel="linkedin">Linkedin</a></li>
              <li><a href="https://www.pinterest.fr" rel="pinterest">Pinterest</a></li>
            </ul>          
          </div>       
      </div>
    </div>
  );
}

export default Footer;