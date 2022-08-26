import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/Shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput')
  nameInputRef!: ElementRef;

  @ViewChild('qtyInput')
  qtyInputRef!: ElementRef;

  @Output() ingredientAdded = new EventEmitter<Ingredient>();


  constructor() { }

  ngOnInit(): void {
  }

  onAddItem(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingQty = this.qtyInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName,ingQty);
    this.ingredientAdded.emit(newIngredient)

  }

}
