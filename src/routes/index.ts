import {Router, Request, Response} from 'express';
import * as PageControllers from '../controlleres/pageControllers';
import * as seachControllers from '../controlleres/seachControllers';


const router = Router();

router.get('/', PageControllers.home);
router.get('/venda_amazon', PageControllers.vendaAmazon);
router.get('/pageitens', PageControllers.pageItens);
router.get('/contas', PageControllers.contas);
router.get('/pedidos', PageControllers.pedidos);
router.get('/carrinho', PageControllers.carrinho);
router.get('/cupons', PageControllers.cupons);

router.get('/search', seachControllers.Seach)


export default router;