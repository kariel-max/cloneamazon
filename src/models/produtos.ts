type qualtype = 'eletronicos' | 'ferramentas' | 'acessorios'

type Produtos = {
    id: number,
    type: qualtype,
    image: string,
    name: string,
    color: string,
    preco: number,
    descricao: string
}

const data: Produtos[] = [
    {
        id:1,
        type: 'eletronicos',
        image: 'Foto-Fone-de-Ouvido-PNG.png',
        name: 'fones de ouvido',
        color: 'Preto',
        preco: 125,
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque explicabo recusandae consequuntur necessitatibus architecto."
    },
   
    {
        id:2,
        type: 'eletronicos',
        image: 'telvisão.png',
        name: 'Televisão',
        color: 'Preto',
        preco: 600,
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque explicabo recusandae consequuntur necessitatibus architecto."
    },
   
    {
        id:1,
        type: 'eletronicos',
        image: 'Foto-Fone-de-Ouvido-PNG.png',
        name: 'fones de ouvido',
        color: 'Preto',
        preco: 125,
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque explicabo recusandae consequuntur necessitatibus architecto."
    },
   
    {
        id:2,
        type: 'eletronicos',
        image: 'telvisão.png',
        name: 'Televisão',
        color: 'Preto',
        preco: 600,
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque explicabo recusandae consequuntur necessitatibus architecto."
    },
   
   
    
];

export const produtos = {
    getAll: ():Produtos[] => {
        return data;
    },
    getFromType: (type: qualtype): Produtos[] =>{
        return data.filter(item => item.type === type);
    },
    getFromName: (name: string):Produtos[] => {
        return data.filter(item => item.name.toLowerCase().indexOf(name.toLowerCase()) > -1);
    }
};