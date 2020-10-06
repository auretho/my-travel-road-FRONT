import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
// import { Route } from 'react-router-dom';
import Header from '../../containers/Header';
import Footer from './Footer';
import Welcome from '../Welcome';
import Connected from '../Connected';
import './styles.scss';

const App = ({ checkLoginAuth, isLogged } ) => {
  useEffect(() => {
    checkLoginAuth();
  } /*,[] */);
  return (
    <div className="app">
      <Header />

      {!isLogged && (    
      <Welcome />       
      )}
      
      {isLogged && (
      <Connected />
      )}

      <Footer />
    </div>
  );
};

App.propTypes = {
  checkLoginAuth: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

export default App;
