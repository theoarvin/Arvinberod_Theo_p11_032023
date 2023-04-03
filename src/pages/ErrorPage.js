import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import img404 from '../assets/img/img404.svg';
import img404Mobile from '../assets/img/img404Mobile.svg';

const ErrorPage = () => {
    return (
        <div>
            <Header/>
            <div className="error-block">
                <img className='img404desktop' src={img404} alt="erreur 404" />
                <img className='img404mobile' src={img404Mobile} alt="erreur 404" />
                <p>Oups! La page que vous demandez n'existe pas.</p>
                <Link className="lien" to="/">Retourner sur la page d’accueil</Link>
            </div>
        </div>
    );
};

export default ErrorPage;