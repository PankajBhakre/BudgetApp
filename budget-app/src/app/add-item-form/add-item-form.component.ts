import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BudgetItem } from 'src/Shared/models/budget-item';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss']
})
export class AddItemFormComponent implements OnInit {

  @Input() item: BudgetItem;
  @Output() formsubmit: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();

  isNewItem: boolean;
  constructor() { }

  ngOnInit(): void {
    //if item has a value
    if(this.item){
      // This is not a new value so it is for Edit functionality
      this.isNewItem = false;
    } else{
      this.isNewItem = true;
      this.item = new BudgetItem('',null);
    }
  }

  onSubmit(form: NgForm){
    this.formsubmit.emit(form.value);
    form.reset();
  }

}
