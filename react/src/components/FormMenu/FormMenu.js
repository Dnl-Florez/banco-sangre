import React from "react";
import { BancoContext } from "../Context/Context";
import { Modal } from "../Modal/Modal.js";
import { FormLogin } from "../FormLogin/FormLogin";
import {FormBuscarDon} from "../FormBuscarDon/FormBuscarDon";
import {FormBuscarPac} from "../FormBuscarPac/FormBuscarPac";
import {FormCrearDon} from "../FormCrearDon/FormCrearDon";
import { FormCrearPac } from "../FormCrearPac/FormCrearPac";
import { MostrarPac } from "../MostrarPac/MostrarPac";
import { MostrarDon } from "../MostrarDon/MostrarDon";

function FormMenu(){
	const { openModal, setOpenModal } = React.useContext(BancoContext);
  	const { openLogin, setOpenLogin } = React.useContext(BancoContext);
  	const { openCrearDon, setOpenCrearDon } = React.useContext(BancoContext);
  	const { openCrearPac, setOpenCrearPac } = React.useContext(BancoContext);
  	const { openBuscarDon, setOpenBuscarDon } = React.useContext(BancoContext);
  	const { openBuscarPac, setOpenBuscarPac } = React.useContext(BancoContext);
	const { openEditarPac, setOpenEditarPac } = React.useContext(BancoContext);
	const { openEditarDon, setOpenEditarDon } = React.useContext(BancoContext);
	const onClickSalir= () => {
    		setOpenModal(true);
		setOpenLogin(true);
  	};	
	const onClickBuscarDon = () => {
    		setOpenModal(true);
		setOpenBuscarDon(true);
  	};
	const onClickBuscarPac = () => {
    		setOpenModal(true);
		setOpenBuscarPac(true);
  	};
	const onClickCrearDon = () => {
    		setOpenModal(true);
		setOpenCrearDon(true);
  	};
	const onClickCrearPac = () => {
    		setOpenModal(true);
		setOpenCrearPac(true);
  	};
	return(
		<div>
			<h1>Menu Principal</h1>
			<p>Numero Documento:</p>
			<input />
			<button onClick={onClickBuscarDon}>Donantes</button>
			<button onClick={onClickBuscarPac}>Pacientes</button>
			<button onClick={onClickCrearPac}>Crear Paciente</button>
			<button onClick={onClickCrearDon}>Crear Donante</button>
			<button onClick={onClickSalir}>Salir</button>
				
			{openModal && (
				<Modal>
	     			{openLogin &&(
						 <FormLogin />
	     				)
					}
				{
					openBuscarDon &&(
						<MostrarDon />
					)
				}
				{
					openBuscarPac &&(
						<MostrarPac />	
						)
					}
				{
					openCrearDon &&(
						<FormCrearDon />
					)
				}
				{
					openCrearPac &&(
						<FormCrearPac />
					)
				}
				{
					openEditarPac &&(
						<FormBuscarPac nrodoc='1000000000' />
					)
				}
				{
					openEditarDon &&(
						<FormBuscarDon nro='4352532' />
					)
				}
				</Modal>
      			)}
			
		</div>
	);
}

export { FormMenu };
