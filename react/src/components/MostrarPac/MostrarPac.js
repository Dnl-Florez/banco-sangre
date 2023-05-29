import React from "react";
import { BancoContext } from "../Context/Context";
import axios from 'axios';
import { useState, useEffect } from "react";


const URI = 'http://localhost:8000/pac/';

const MostrarPac = () => {
	const { openModal, setOpenModal } = React.useContext(BancoContext);
	const { openBuscarPac, setOpenBuscarPac } = React.useContext(BancoContext);
	const { openEditarPac, setOpenEditarPac } = React.useContext(BancoContext);

	const[pac, setPac] = useState([])
	useEffect( ()=>{
		getPac()
	}, []);

	const deletePac = async (id) => {
		await axios.delete(`${URI}${id}`)
		getPac()
	};
	
	const getPac = async () => {
		const res = await axios.get(URI)
		setPac(res.data)
	};

	const openEdit = () => {
		setOpenBuscarPac(false);
		setOpenEditarPac(true);
	}

	const onCancel= () => {
		setOpenModal(false);
		setOpenBuscarPac(false);
	};

	return(
		<div>
			<div>
				<div>
					<table className='table table-striped-columns'>
						<thead>
							<tr>
								<th>Nombre</th>
								<th>Apellido</th>
								<th>Tipo de Documento</th>
								<th>Numero de Documento</th>
								<th>Genero</th>
								<th>Telefono</th>
								<th>Edad</th>
								<th>G.S.</th>
								<th>RH</th>
								<th>EPS</th>
							</tr>
						</thead>	
						<tbody>
							{ pac.map( (pc) => (
								 <tr key = { pc.nroDoc_pac}>
									<td> {pc.nombre_pac } </td>
									<td> {pc.apellido_pac} </td>
									<td> {pc.tipoDoc_pac} </td>
									<td> {pc.nroDoc_pac} </td>
									<td> {pc.genero_pac} </td>
									<td> {pc.tel_pac} </td>
									<td> {pc.edad_pac} </td>
									<td> {pc.gs_pac} </td>
									<td> {pc.rh_pac} </td>
									<td> {pc.eps_pac} </td>
									<td>
										<button onClick={() => openEdit(pc.nroDoc_pac)} className='btn btn-warning'>Editar</button>
										<button onClick={() => deletePac(pc.nroDoc_pac)} className='btn btn-danger'> Borrar </button>
									</td>
								</tr>
							) ) }
						</tbody>
					</table>
				</div>
			</div>
			<button 
	 			className='boton-cancelar'
				type='exit'
				onClick={onCancel}
      		>Cancelar</button>
		</div>		
	);
}

export { MostrarPac };
