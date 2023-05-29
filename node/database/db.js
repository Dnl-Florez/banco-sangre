import { Sequelize } from "sequelize";

const db = new Sequelize('bancosangre', 'root', '', {
	host: 'localhost',
	dialect: 'mysql'
})

export { db };
