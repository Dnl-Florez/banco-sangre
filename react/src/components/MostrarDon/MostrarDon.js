import React from "react";
import { BancoContext } from "../Context/Context";
import axios from 'axios';
import { useState, useEffect } from "react";


const URI = 'http://localhost:8000/don/';

const MostrarDon = () => {
	const { openModal, setOpenModal } = React.useContext(BancoContext);
	const { openBuscarDon, setOpenBuscarDon } = React.useContext(BancoContext);
	const { openEditarDon, setOpenEditarDon } = React.useContext(BancoContext);

	const[don, setDon] = useState([])
	useEffect( ()=>{
		getDon()
	}, []);

	const deleteDon = async (id) => {
		await axios.delete(`${URI}${id}`)
		getDon()
	};
	
	const getDon = async () => {
		const res = await axios.get(URI)
		setDon(res.data)
	};

	const openEdit = () => {
		setOpenBuscarDon(false);
		setOpenEditarDon(true);
	}

	const onCancel= () => {
		setOpenModal(false);
		setOpenBuscarDon(false);
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
                                <th>cantidad donaciones</th>
                                <th>fecha</th>
							</tr>
						</thead>	
						<tbody>
							{ don.map( (dn) => (
								 <tr key = { dn.nroDoc_don}>
									<td> {dn.nombre_don } </td>
									<td> {dn.apellido_don} </td>
									<td> {dn.tipoDoc_don} </td>
									<td> {dn.nroDoc_don} </td>
									<td> {dn.genero_don} </td>
									<td> {dn.tel_don} </td>
									<td> {dn.edad_don} </td>
									<td> {dn.gs_don} </td>
									<td> {dn.rh_don} </td>
									<td> {dn.eps_don} </td>
                                    <td> {dn.cantDon_don} </td>
                                    <td> {dn.fechaDon_don} </td>
									<td>
										<button onClick={() => openEdit(dn.nroDoc_don)} className='btn btn-warning'>Editar</button>
										<button onClick={() => deleteDon(dn.nroDoc_don)} className='btn btn-danger'> Borrar </button>
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

export { MostrarDon };