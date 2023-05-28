import React from 'react';
import { BancoContext } from '../BancoContext/BancoContext.js'
import './BancoHeader.css';

function BancoHeader(){

  const { openModal, setOpenModal } = React.useContext(BancoContext);
  const { openLogin, setOpenLogin } = React.useContext(BancoContext);
  const { openRegister, setOpenRegister } = React.useContext(BancoContext);
  
  const onClickLogin = () => {
    setOpenModal(true);
    setOpenLogin(true);
    setOpenRegister(false);
  };

  const onClickRegister = () => {
    setOpenModal(true);
    setOpenRegister(true);
    setOpenLogin(false);
  };
return(
  <div className='header'>
    <h1 className='title'>Banco de Sangre</h1>
      <p className='sesion' onClick={onClickLogin}>Iniciar Sesión</p>
      <p className='registrarse' onClick={onClickRegister}>Registrarse</p>
  </div>
);
}

export { BancoHeader };
