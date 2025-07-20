import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-input-number',
  standalone: false,
  templateUrl: './input-number.component.html',
  styleUrl: './input-number.component.scss'
})
export class InputNumberComponent implements OnInit{
  @Input()
  quantity!: number;

  @Input()
  max!: number;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  maxReached: EventEmitter<string> = new EventEmitter<string>();

  upQuantity(): void {
    if(this.quantity < this.max){
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }else{
      this.maxReached.emit("maximo");
    }
  }
  downQuantity(): void {
    if(this.quantity > 0)
      this.quantity--;
      this.quantityChange.emit(this.quantity);
  }
  onChangeQuantity(event: { key: any; }): void{
    //console.log(event.key);
    this.quantityChange.emit(this.quantity);
  }
  ngOnInit(): void {
    
  }
}
