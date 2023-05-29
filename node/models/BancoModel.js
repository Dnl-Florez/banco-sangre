import { db } from '../database/db.js';
import { DataTypes } from 'sequelize';

const paciente = db.define("pacientes", {
	"nombre_pac": { type: DataTypes.STRING },
	"apellido_pac": { type: DataTypes.STRING },
	"tipoDoc_pac": { type: DataTypes.STRING },
	"nroDoc_pac": { type: DataTypes.INTEGER, primaryKey:true},
	"genero_pac": { type: DataTypes.STRING },
	"tel_pac": { type: DataTypes.BIGINT},
	"edad_pac": { type: DataTypes.INTEGER},
	"gs_pac": { type: DataTypes.STRING },
	"rh_pac": { type: DataTypes.STRING },
	"eps_pac": { type: DataTypes.STRING },
}, {
	timestamps:false,
});

const donante = db.define("donantes", {
	"nombre_don": { type: DataTypes.STRING },
	"apellido_don": { type: DataTypes.STRING },
	"tipoDoc_don": { type: DataTypes.STRING },
	"nroDoc_don": { type: DataTypes.INTEGER, primaryKey:true},
	"genero_don": { type: DataTypes.STRING },
	"tel_don": { type: DataTypes.BIGINT},
	"edad_don": { type: DataTypes.INTEGER},
	"gs_don": { type: DataTypes.STRING },
	"rh_don": { type: DataTypes.STRING },
	"eps_don": { type: DataTypes.STRING },
	"cantDon_don": { type: DataTypes.INTEGER},
	"fechaDon_don": { type: DataTypes.DATE},
}, {
	timestamps:false,
});

const eps = db.define("eps", {
	"id_eps": { type: DataTypes.INTEGER, primaryKey:true },
	"desc_eps": { type: DataTypes.STRING },
}, {
	timestamps:false,
});

const gen = db.define("generos", {
	"id_genero": { type: DataTypes.INTEGER, primaryKey:true },
	"desc_genero": { type: DataTypes.STRING },
}, {
	timestamps:false,
});

const gs = db.define("gs", {
	"id_gs": { type: DataTypes.INTEGER, primaryKey:true },
	"desc_gs": { type: DataTypes.STRING },
}, {
	timestamps:false,
});

const rh = db.define("rhs", {
	"id_rh": { type: DataTypes.INTEGER, primaryKey:true },
	"desc_rh": { type: DataTypes.STRING },
}, {
	timestamps:false,
});

const tipoDoc = db.define("tipoDocs", {
	"id_tipoDoc": { type: DataTypes.INTEGER, primaryKey:true },
	"desc_tipoDoc": { type: DataTypes.STRING },
}, {
	timestamps:false,
});

export { paciente, donante, eps, gen, gs, rh, tipoDoc };
