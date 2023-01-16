import {Request, Response} from 'express';
import { produtos } from '../models/produtos';

export const home = (req: Request, res: Response) => {

    let list = produtos.getAll()

    res.render('pages/page', {
        
        banner: {

            background1: 'Foto-Fone-de-Ouvido-PNG.png',
            background2: 'telvisão.png'

        },
        list

    });
}

export const vendaAmazon = (req: Request, res: Response) => {
    res.render('pages/page', {
        
    });
} ;

export const pageItens = (req: Request, res: Response) => {
    res.render('pages/page', {
        
    });
};

export const contas = (req: Request, res: Response) => {
    res.render('pages/page', {
        
    });
};

export const pedidos = (req: Request, res: Response) => {
    res.render('pages/page', {

       
        
    });
};
export const carrinho = (req: Request, res: Response) => {
    res.render('pages/carrinho', {
        
    });
};
export const cupons = (req: Request, res: Response) => {
    res.render('pages/page', {
        
    });
};
