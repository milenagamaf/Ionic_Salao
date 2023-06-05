import { v4 as uuid } from 'uuid';

export class Produto {
    _id : string = uuid();
   nome : string = "";
   categoria : string = "";
   descricao : string = "";
   quant : number | undefined;
   valor : number | undefined;
    ativo  : boolean = true;

}