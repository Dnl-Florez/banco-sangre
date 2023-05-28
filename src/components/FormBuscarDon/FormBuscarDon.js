import React from "react";
import { BancoContext } from "../Context/Context";

function FormBuscarDon(){
	const { openModal, setOpenModal } = React.useContext(BancoContext);
	const { openBuscarDon, setOpenBuscarDon } = React.useContext(BancoContext);
	const onCancel= () => {
    		setOpenModal(false);
		setOpenBuscarDon(false);
  	};
	return(
	<form className='register-form'>
      		<label className='form-title'>Buscar Donante</label>
		<div className='section section-left'>
			<a className='text-nombre'>Nombre:</a>
      			<input 
          			className='input-nombre' 
				name='nombre' 
			/>
			<a className='text-apellido'>Apellido:</a>
			<input 
				className='input-apellido' 
				name='apellido' 
			/>
			<a className='text-tipodoc'>Tipo de Documento:</a>
			<select
				className='select-tipodoc'
				name='tipodoc'
			>
				<option>Cedula</option>
			</select>
			<a className='text-nrodoc'>Numero de Documento:</a>
			<input 
				className='input-nrodoc' 
				name='nrodoc' 
			/>
			<a className='text-edad'>Edad:</a>
			<input 
				className='input-edad' 
				name='edad' 
			/>
			<a className='text-genero'>Genero:</a>
			<select
				className='select-genero'
				name='genero'
			>
				<option>Masculino</option>
		 	</select>	
		</div>
		<div className='section section-right'>
			<a className='text-tel'>Telefono:</a>
			<input 
				className='input-tel' 
				name='tel' 
			/>
			<div className='tiposangre-container'>
				<a className='text-gs'>G.S.:</a>
				<a className='text-rh'>RH:</a><p/>
				<select
					className='select-gs'
					name='gs'
				>
					<option>A</option>
				</select>
				<select
					className='select-rh'
					name='rh'
				>
					<option>+</option>
				</select>
			</div>
			<a className='text-eps'>EPS:</a>
			<select
				className='select-eps'
				name='eps'
			>
				<option>Sanitas</option>
			</select>
			<a className='text-cantdon'>Cantidad de donaciones / año:</a>
			<input 
				className='input-cantdon' 
				name='cantdon' 
			/>
			<div className='ultdonacion-container'>
				<a className='text-dd'>DD:</a>
				<a className='text-mm'>MM:</a><p/>
				<a className='text-aaaa'>AAAA:</a><p/>
				<select
					className='select-dd'
					name='dd'
				>
					<option>01</option>
				</select>
				<select
					className='select-mm'
					name='mm'
				>
					<option>enero</option>
				</select>
				<select
					className='select-aaaa'
					name='aaaa'
				>
					<option>2023</option>
				</select>

			</div>
		</div>
      	<button
	  className='boton-ingresar'
	  type='submit'
      	> Actualizar </button>
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

export { FormBuscarDon };
