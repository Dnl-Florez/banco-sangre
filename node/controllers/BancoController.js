import { paciente, donante, eps, gen, gs, rh, tipoDoc } from '../models/BancoModel.js';

//Mostrar todos los registros
export const getAllPac = async (req, res) => {
	try{
		const pac = await paciente.findAll();
		res.json(pac);
	}catch(error){
		res.json( { message: error.message } )
	}
}

export const getAllDon = async (req, res) => {
	try{
		const don = await donante.findAll();
		res.json(don);
	}catch(error){
		res.json( { message: error.message } )
	}
}
export const getAllEps = async (req, res) => {
	try{
		const epss = await eps.findAll();
		res.json(epss);
	}catch(error){
		res.json( { message: error.message } )
	}
}
export const getAllGen = async (req, res) => {
	try{
		const gn = await gen.findAll();
		res.json(gn);
	}catch(error){
		res.json( { message: error.message } )
	}
}
export const getAllGs = async (req, res) => {
	try{
		const gru = await gs.findAll();
		res.json(gru);
	}catch(error){
		res.json( { message: error.message } )
	}
}
export const getAllRh = async (req, res) => {
	try{
		const rhs = await rh.findAll();
		res.json(rhs);
	}catch(error){
		res.json( { message: error.message } )
	}
}
export const getAllTipoDoc = async (req, res) => {
	try{
		const tip = await tipoDoc.findAll();
		res.json(tip);
	}catch(error){
		res.json( { message: error.message } )
	}
}

//Mostrar un registro
export const getPac = async (req, res) => {
	try{
		const pac = await paciente.findAll({
			where:{ nroDoc_pac:req.params.nroDoc_pac} 
		});
		res.json(pac[0]);
	}catch(error){
		res.json( { message: error.message } )
	}
}

export const getDon = async (req, res) => {
	try{
		const don = await donante.findAll({
			where:{ nroDoc_don:req.params.nroDoc_don} 
		});
		res.json(don[0]);
	}catch(error){
		res.json( { message: error.message } )
	}
}

// Crear un registro
export const createPac = async (req, res) => {
	try{
		await paciente.create(req.body);
		res.json({
			'message':'Registro creado con exito'
		});
	}catch(error){
		res.json( { message: error.message } )
	}
}

export const createDon = async (req, res) => {
	try{
		await donante.create(req.body);
		res.json({
			'message':'Registro creado con exito'
		});
	}catch(error){
		res.json( { message: error.message } )
	}
}

//Actualiza un registro
export const updatePac = async (req, res) => {
	try{
		await paciente.update(req.body, {
			where: { nroDoc_pac:req.params.nroDoc_pac }
		});
		res.json({
			'message':'Registro actualizado con exito'
		});
	}catch(error){
		res.json( { message: error.message } )
	}
}

export const updateDon = async (req, res) => {
	try{
		await donante.update(req.body, {
			where: { nroDoc_don:req.params.nroDoc_don }
		});
		res.json({
			'message':'Registro actualizado con exito'
		});
	}catch(error){
		res.json( { message: error.message } )
	}
}

//Eliminar un registro
export const deletePac = async (req, res) => {
	try{
		await paciente.destroy({
			where: { nroDoc_pac:req.params.nroDoc_pac }
		});
		res.json({
			'message':'Registro eliminado con exito'
		});
	}catch(error){
		res.json( { message: error.message } )
	}
}

export const deleteDon = async (req, res) => {
	try{
		await donante.destroy({
			where: { nroDoc_don:req.params.nroDoc_don }
		});
		res.json({
			'message':'Registro eliminado con exito'
		});
	}catch(error){
		res.json( { message: error.message } )
	}
}
