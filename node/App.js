import express from 'express';
import cors from 'cors';
import { docrouter, donrouter, epsrouter, genrouter, gsrouter, pacrouter, rhrouter } from './routes/Routes.js';
import {db} from './database/db.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/pac', pacrouter);
app.use('/don', donrouter);
app.use('/gen', genrouter);
app.use('/eps', epsrouter);
app.use('/rh', rhrouter);
app.use('/gs', gsrouter);
app.use('/doc', docrouter);

try{
	await db.authenticate();
	console.log('Conexion exitosa');
}catch(error){
	console.log('El error de la conexion es: ${error}')
}

// app.get('/', (req, res)=>{
// 	res.send('HOLA MUNDO')
// });

app.listen(8000, () => {
	console.log('Server up running in http://localhost:8000/')
});
