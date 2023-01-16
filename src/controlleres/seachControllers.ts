import {Request, Response} from 'express';
import { produtos } from '../models/produtos';


export const Seach = ( req: Request, res: Response) => {
    let query: string = req.query.produtos as string;

    let list = produtos.getFromName(query);
    
    res.render('pages/search', {
        query,
        list
    });
};