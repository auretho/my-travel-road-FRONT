import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';


const Main = () => (
    <div className='main'>
        <div className='main-container'>
            <h2 className='main-title'>Préparez, voyagez et partagez</h2>
                <p className='main-content'>
                    Créer votre propre journal de bord intéractif<br />
                    Vous placez simplement des étapes pour créer la route de votre voyage
                     où vous pourrez y ajouter toutes vos photos, commentaires et bien plus.<br />
                    Vous partagerez vos expériences uniques avec une communauté dédiée aux voyages de tout genre.<br />
                    Pas de voyages prévus ?<br />
                    Venez simplement vous inspirer des parcours de nos voyageurs tout autour du monde.<br />
                    A vous de faire votre choix! 
                </p>
        </div>        
        <div className='main-connect'>
            <p className='main-first'>Première   visite ?</p>
            <p className= 'main-second'>Créer gratuitement un compte</p>
            <Link to='/welcome/create-account'>
                <button className='main-button'> 
                    Créer mon compte
                </button>
            </Link>
        </div>
    </div>
  );

  export default Main;