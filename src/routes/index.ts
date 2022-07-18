import { Router } from 'express';
import * as HomeController from '../controllers/homeController';
import * as UserController from '../controllers/userController';
import * as SearchController from '../controllers/searchController';

const router = Router();

router.get('/', HomeController.home);
router.get('/cadastrar', UserController.cadastrar);
router.post('/cadastrarNv', UserController.cadastrarNv);
router.get('/pesquisar', SearchController.buscar);
router.get('/todosUsers', SearchController.mostrarTodoUser);

export default router;