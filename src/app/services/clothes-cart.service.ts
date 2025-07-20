import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Clothes } from '../clothes-list/Clothes';
//logica del carrito
@Injectable({
  providedIn: 'root'
})
export class ClothesCartService {

  private _clothList: Clothes[] = [];
  clothList: BehaviorSubject<Clothes[]> = new BehaviorSubject(this._clothList);

  private _stockList: Clothes[]=[];

  addCart(clothes: Clothes) {
    //console.log('agrega', clothes.name);
    let item: Clothes | undefined = this._clothList.find((v1) => v1.id == clothes.id) 
    if(!item){
      this._clothList.push({ ... clothes});
    } else{
      item.quantity += clothes.quantity;
    }
    //console.log(this._clothList);
    this.clothList.next(this._clothList);//actualiza el observable   
  }

  constructor() { }
}
