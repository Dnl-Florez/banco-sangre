import React from 'react';
import { BancoHeader } from './components/BancoHeader/BancoHeader.js'
import { BancoBody } from './components/BancoBody/BancoBody.js'
import { BancoFooter } from './components/BancoFooter/BancoFooter.js'
import { BancoTarjetas } from './components/BancoTarjetas/BancoTarjetas.js'
import { Modal } from './components/Modal/Modal.js'
import { BancoContext } from './components/BancoContext/BancoContext.js';
import {BancoLoginForm} from './components/BancoLoginForm/BancoLoginForm.js';
import { BancoRegisterForm } from './components/BancoRegisterForm/BancoRegisterForm.js'

function AppUI(){

  const {
    	openModal,
	openRegister,
	openLogin
  }= React.useContext(BancoContext);

  return (
  <React.Fragment> 
    <div className = 'body'>
      <BancoHeader />
	
      <section className='bg'></section> 
	  
      <BancoTarjetas />

      <BancoBody />

      <BancoFooter />

     {openModal && (
	<Modal>
	     {openLogin &&(
	     	<BancoLoginForm />
	     )},
	     {openRegister && (
	     	<BancoRegisterForm />
	     )}
	</Modal>
      )}
    </div>
    </React.Fragment>

  );
}

export { AppUI };
