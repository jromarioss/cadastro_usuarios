import { Router } from 'express';
import * as HomeController from '../controllers/homeController';
import * as UserController from '../controllers/userController';
import * as SearchController from '../controllers/searchController';

const router = Router();

router.get('/', HomeController.home);

router.get('/cadastrar', UserController.cadastrar);
router.post('/cadastrarNv', UserController.cadastrarNv);

router.get('/pesquisar', SearchController.buscar);
router.get('/pesquisar/:id/excluir', SearchController.excluir);

router.get('/editar', SearchController.editar);
router.put('/editarUser', SearchController.editarUser);

router.get('/todosUsers', SearchController.mostrarTodoUser);

export default router;