import React from "react";
import { BancoContext } from "../Context/Context";

function FormLogin() {
	const { openModal, setOpenModal } = React.useContext(BancoContext);
  	const { openLogin, setOpenLogin } = React.useContext(BancoContext);
	const onClickLogin = () => {
    		setOpenModal(false);
		setOpenLogin(false);
  	};
return(
	
<form>
      	<label >Iniciar Sesión</label>
	<p>Usuario:</p>
      	<input 
	  
	/>
	<p>Contraseña:</p>
      	<input 
	   
	/>
	<div >
	  <input
	    
	    type={'checkbox'}
	  />
	  <a >Mostrar Contraseña</a>
	</div>
      	<button
	  onClick={onClickLogin} 
	  type='submit'
      	> Ingresar </button>
	<div>
	</div>

    </form>

	);
}

export { FormLogin };
