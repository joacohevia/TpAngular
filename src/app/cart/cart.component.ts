import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Clothes } from '../clothes-list/Clothes';
import { ClothesCartService } from '../services/clothes-cart.service';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit{
  clothList$: Observable<Clothes[]>;
  
  constructor(private cart: ClothesCartService){
    this.clothList$ = cart.clothList.asObservable();
    //cart.clothList.subscribe((obser) => this.clothList = obser);
  }

  ngOnInit(): void {
    
  }
}
