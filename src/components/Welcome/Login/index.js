import React from 'react';

import PropTypes from 'prop-types';
import Field from './Field';
import './style.scss';


const Login = ({
  email,
  password,
  changeField,
  handleLogin,
  handleLogout,
  isLogged,
  loading,
  opened,
  onToggle,
  loggedMessage,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };

  if (loading) {
    return (
      <div className="login-form">
        Connexion en cours
      </div>
    );
  }

  return (
    <div className='login'>
      <div className={opened? 'login' : 'login-closed'}>
        <div className='login-form'>

          <div className="connection-zone">
            <button
            className={opened ? 'connection-button opened' : 'connection-button'}
            type="button"
            onClick={onToggle}
            >
            Connexion
          </button>
          </div>
          {isLogged && (
            <div className="login-form-logged">
              <p className="login-form-message">
                {loggedMessage}
              </p>
              
              <button
                type="button"
                className="login-form-button"
                onClick={handleLogout}
              >
                Déconnexion
              </button>
            </div>
          )}
          {!isLogged && (

            


            <form autoComplete="off" className="login-form-element" onSubmit={handleSubmit}>
              <Field
                name="email"
                type="email"
                placeholder="Adresse Email"
                onChange={changeField}
                value={email}
              />
              <Field
                name="password"
                type="password"
                placeholder="Mot de passe"
                onChange={changeField}
                value={password}
              />
              <button
                type="submit"
                className="login-form-button"
              >
                OK
              </button>
            </form>
            
          )}
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  opened: PropTypes.bool.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
  isLogged: PropTypes.bool,
  loading: PropTypes.bool.isRequired,
  loggedMessage: PropTypes.string,
  onToggle: PropTypes.func.isRequired,
};

Login.defaultProps = {
  isLogged: false,
  loggedMessage: 'Connecté',
};

export default Login;