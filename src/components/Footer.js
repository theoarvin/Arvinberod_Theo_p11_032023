import React from 'react';
import logoFooter from '../assets/img/logo-footer.svg'
const Footer = () => {
    return (
        <footer>
           <div className='footer'>
              <img src={logoFooter} alt="logo kasa footer" />
              <p>© 2020 Kasa. All rights reserved</p>
           </div>
        </footer>
        
    );
};

export default Footer;