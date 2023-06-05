import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData, addDoc, getDoc, query, getDocs, doc } from '@angular/fire/firestore';
import { Prod } from '../model/prod';

@Injectable({
  providedIn: 'root'
})
export class ProdService {

  constructor() { }

  private firestore: Firestore = inject(Firestore); // inject Cloud Firestore
  private prodCollection = collection(this.firestore, 'prods');

  add(prod: Prod) {
    return addDoc(this.prodCollection, <Prod>{
      nome: prod.nome,
      categoria: prod.categoria,
      descricao: prod.descricao,
      quant: prod.quant,
      valor: prod.valor
    })
  }

  async list() {
    //return collectionData(query(this.prodCollection));
    const result = await getDocs(query(this.prodCollection));
    return result.docs.map(doc => ({ _id: doc.id, ...doc.data() }));
  }

  async get(id: string) {
    const result = await getDoc(doc(this.firestore, 'prods', id))
    //return result.data() 
    return { _id: result.id, ...result.data() }
  }

}
