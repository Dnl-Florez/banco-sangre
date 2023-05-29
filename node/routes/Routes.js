import { createDon, createPac, deleteDon, deletePac, getAllDon, getAllEps, getAllGen, getAllGs, getAllPac, getAllRh, getAllTipoDoc, getDon, getPac, updateDon, updatePac } from '../controllers/BancoController.js'
import express from "express";

const pacrouter = express.Router();

pacrouter.get('/', getAllPac);
pacrouter.get('/:nroDoc_pac', getPac);
pacrouter.post('/', createPac);
pacrouter.put('/:nroDoc_pac', updatePac);
pacrouter.delete('/:nroDoc_pac', deletePac);

const donrouter = express.Router();
donrouter.get('/', getAllDon);
donrouter.get('/:nroDoc_don', getDon);
donrouter.post('/', createDon);
donrouter.put('/:nroDoc_don', updateDon);
donrouter.delete('/:nroDoc_don', deleteDon);

const genrouter = express.Router();
genrouter.get('/', getAllGen);

const epsrouter = express.Router();
epsrouter.get('/', getAllEps);

const rhrouter = express.Router();
rhrouter.get('/', getAllRh);

const gsrouter = express.Router();
gsrouter.get('/', getAllGs);

const docrouter = express.Router();
docrouter.get('/', getAllTipoDoc);

export { pacrouter, donrouter, genrouter, epsrouter, rhrouter, gsrouter, docrouter };
