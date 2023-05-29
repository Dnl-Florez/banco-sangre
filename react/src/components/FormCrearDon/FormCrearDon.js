import React from "react";
import { BancoContext } from "../Context/Context";
import axios from 'axios';
import { useState, useEffect } from "react";

const URI = 'http://localhost:8000/don/';
const URIgen = 'http://localhost:8000/gen/'
const URIeps = 'http://localhost:8000/eps/'
const URIrh = 'http://localhost:8000/rh/'
const URIgs = 'http://localhost:8000/gs/'
const URIdoc = 'http://localhost:8000/doc/'

function FormCrearDon(){
	const [ nombre, setNombre ] = useState('')
	const [ apellido, setApellido ] = useState('')
	const [ tipoDoc, setTipoDoc ] = useState('')
	const [ nroDoc, setNroDoc ] = useState('')
	const [ genero, setGenero ] = useState('')
	const [ tel, setTel ] = useState('')
	const [ edad, setEdad ] = useState('')
	const [ gs, setGs ] = useState('')
	const [ rh, setRh ] = useState('')
	const [ eps, setEps ] = useState('')
	const [ cantDon, setCantDon ] = useState('')
	const [ fecha, setFecha ] = useState('')
	const { openModal, setOpenModal } = React.useContext(BancoContext);
	const { openCrearDon, setOpenCrearDon } = React.useContext(BancoContext);
	
	const[gen, setGen] = useState([])
	useEffect( ()=>{
		getGen()
	}, []);

	const getGen = async () => {
		const res = await axios.get(URIgen)
		setGen(res.data)
	};

	const[epps, setEpps] = useState([])
	useEffect( ()=>{
		getEpps()
	}, []);

	const getEpps = async () => {
		const res = await axios.get(URIeps)
		setEpps(res.data)
	};

	const[rhh, setRhh] = useState([])
	useEffect( ()=>{
		getRhh()
	}, []);

	const getRhh = async () => {
		const res = await axios.get(URIrh)
		setRhh(res.data)
	};

	const[ggs, setGgs] = useState([])
	useEffect( ()=>{
		getGgs()
	}, []);

	const getGgs = async () => {
		const res = await axios.get(URIgs)
		setGgs(res.data)
	};

	const[doc, setDoc] = useState([])
	useEffect( ()=>{
		getDoc()
	}, []);

	const getDoc = async () => {
		const res = await axios.get(URIdoc)
		setDoc(res.data)
	};
	
	const onCancel= () => {
    	setOpenModal(false);
		setOpenCrearDon(false);
  	};
	const store = async (e) => {
		e.preventDefault()
		await axios.post(URI, {
			"nombre_don": nombre, 
			"apellido_don": apellido,
			"tipoDoc_don": tipoDoc,
			"nroDoc_don": nroDoc,
			"genero_don": genero,
			"tel_don": tel,
			"edad_don": edad,
			"gs_don": gs,
			"rh_don": rh,
			"eps_don": eps,
			"cantDon_don": cantDon,
			"fechaDon_don": fecha
		})
		window.location.reload();
	}
	return(
		<form className='register-form' onSubmit={store}>
		<label className='form-title'>Crear Donante</label>
  <div className='section section-left'>
	  <a className='text-nombre'>Nombre:</a>
			<input 
			  value={nombre}
			  onChange={ (e) => setNombre(e.target.value)}
			  className='input-nombre'  
		  />
	  <a className='text-apellido'>Apellido:</a>
	  <input 
		  value={apellido}
		  onChange={ (e) => setApellido(e.target.value)}
		  className='input-apellido'  
	  />
	  <a className='text-tipodoc'>Tipo de Documento:</a>
	  <select
		  value={tipoDoc}
		  onChange={ (e) => setTipoDoc(e.target.value)}
		  className='select-tipodoc'
	  >
	  { doc.map( (dc) => (
		  <option key={dc.desc_tipoDoc} value={dc.desc_tipoDoc}>{dc.desc_tipoDoc}</option>
	  ))}
	  </select>
	  <a className='text-nrodoc'>Numero de Documento:</a>
	  <input 
		  value={nroDoc}
		  onChange={ (e) => setNroDoc(e.target.value)}
		  className='input-nrodoc' 
	  />
	  <a className='text-edad'>Edad:</a>
	  <input 
		  value={edad}
		  onChange={ (e) => setEdad(e.target.value)}
		  className='input-edad'  
	  />
	  <a className='text-genero'>Genero:</a>
	  <select
		  value={genero}
		  onChange={ (e) => setGenero(e.target.value)}
		  className='select-genero'
	  >
	  { gen.map( (gn) => (
		  <option key={gn.desc_genero} value={gn.desc_genero}>{gn.desc_genero}</option>
	  ))}
	   </select>	
  </div>
  <div className='section section-right'>
	  <a className='text-tel'>Telefono:</a>
	  <input 
		  value={tel}
		  onChange={ (e) => setTel(e.target.value)}
		  className='input-tel' 
		  name='tel' 
	  />
	  <div className='tiposangre-container'>
		  <a className='text-gs'>G.S.:</a>
		  <a className='text-rh'>RH:</a><p/>
		  <select
			  value={gs}
			  onChange={ (e) => setGs(e.target.value)}
			  className='select-gs'
		  >
		  { ggs.map( (gs) => (
			  <option key={gs.desc_gs} value={gs.desc_gs}>{gs.desc_gs}</option>
		  ))}
		  </select>
		  <select
			  value={rh}
			  onChange={ (e) => setRh(e.target.value)}
			  className='select-rh'
			  name='rh'
		  >
		  { rhh.map( (rh) => (
		  <option key={rh.desc_rh} value={rh.desc_rh}>{rh.desc_rh}</option>
		  ))}
		  </select>
	  </div>
	  <a className='text-eps'>EPS:</a>
	  <select
		  value={eps}
		  onChange={ (e) => setEps(e.target.value)}
		  className='select-eps'
		  name='eps'
	  >
	  { epps.map( (ep) => (
		  <option key={ep.desc_eps} value={ep.desc_eps}>{ep.desc_eps}</option>
	  ))}
	  </select>
			<a className='text-cantdon'>Cantidad de donaciones / año:</a>
			<input 
				value={cantDon}
				onChange={ (e) => setCantDon(e.target.value)}
				className='input-cantdon' 
				name='cantdon' 
			/>
			<input 
				value={fecha}
				onChange={ (e) => setFecha(e.target.value)}
				type={"date"} 
			/>
		</div>
      	<button
	  className='boton-ingresar'
	  type='submit'
      	> Crear </button>
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

export { FormCrearDon };
