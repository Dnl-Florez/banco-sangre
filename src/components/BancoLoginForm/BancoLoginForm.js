import React from 'react';
import { BancoContext } from '../BancoContext/BancoContext.js'
import './BancoLoginForm.css'

function BancoLoginForm (){
  const { 
    setOpenModal,
  } = React.useContext(BancoContext);

  const onCancel = () => {
    setOpenModal(false);
  };

  return(
    <form className='login-form'>
      	<label className='form-title'>Iniciar Sesión</label>
      	<input 
	  className='input-usuario' 
	  name='usuario' 
	  placeholder='usuario' 
	/>
      	<input 
	  className='input-contrasena' 
	  type={'password'}
	  name='contrasena' 
	  placeholder='contraseña' 
	/>
	<div className='mostrarcon-container'>
	  <input
	    className='input-mostarcon'
	    name='mostarcon'
	    type={'checkbox'}
	  />
	  <a className='checkbox-text'>Mostrar Contraseña</a>
	</div>
      	<button
	  className='boton-ingresar'
	  type='submit'
      	> Ingresar </button>
	<div>
	<button 
	  className='boton-cancelar'
	  type='exit'
	  onClick={onCancel}
      	>Cancelar</button>
	</div>

    </form>
  );
}

export { BancoLoginForm };
