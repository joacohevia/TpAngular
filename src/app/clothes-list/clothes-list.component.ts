import { Component, OnInit } from '@angular/core';
import { ClothDataService } from '../services/cloth-data.service';
import { ClothesCartService } from '../services/clothes-cart.service';
import { Clothes } from './Clothes';
@Component({
  selector: 'app-clothes-list',
  standalone: false,
  templateUrl: './clothes-list.component.html',
  styleUrl: './clothes-list.component.scss'
})
export class ClothesListComponent implements OnInit{
  clothes: Clothes[] = [];
  
  ngOnInit(): void{
    this.clothsDataService.getAll().subscribe(clothes => this.clothes = clothes);

  }

  constructor (private cart: ClothesCartService, private clothsDataService: ClothDataService){
      
  }

  addCart(clothes: any): void {
    if(clothes.quantity > 0){
      this.cart.addCart(clothes);
      clothes.stock -= clothes.quantity;
      clothes.quantity = 0;
    }
  }

  maxReached(m: string){
    alert('Se alcanzo el maximo permitido.');
  }
}
