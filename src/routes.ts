import { Router } from 'express';
import Vistoria from './controllers/Vistoria';

const routes = Router();

routes.post('/relatorio', Vistoria.ceateVistoria);
export default routes;