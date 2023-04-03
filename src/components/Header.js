import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo-kasa.svg'

const Header = () => {
    const currentPage = window.location.pathname; // get the current page path
    return (
        <header>
            <div className="logo">
            <Link to="/">
                <img src={logo} alt="logo kasa" />
            </Link> 
            </div>
            <nav>
                {
                    currentPage === '/' ? (
                        <>
                        <Link style={{textDecorationLine: 'underline'}} to="/"><p>Accueil</p></Link>
                        <Link to="/a-propos"><p>A propos</p></Link>
                        </>
                    ):(
                        <>
                        <Link to="/"><p>Accueil</p></Link>
                        <Link style={{textDecorationLine: 'underline'}} to="/a-propos"><p>A propos</p></Link>
                        </>
                    )
                } 
            </nav>
        </header>
    );
};

export default Header;