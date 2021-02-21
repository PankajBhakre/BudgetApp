import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BudgetItem } from 'src/Shared/models/budget-item';
import { MatDialog} from '@angular/material/dialog';
import { EditItemModalComponent } from '../edit-item-modal/edit-item-modal.component';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss']
})


export class BudgetItemListComponent implements OnInit {

  @Input() budgetItems: BudgetItem[];
  @Output() delete: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();
  @Output() update: EventEmitter<updateEvent> = new EventEmitter<updateEvent>();

  constructor(public dialog: MatDialog) { }


  ngOnInit(): void {
  }

  onDeleteButtonClicked(item: BudgetItem){
    debugger;
    this.delete.emit(item);
  }

   onCardClicked(item: BudgetItem){
     const dialogRef = this.dialog.open(EditItemModalComponent, {
      width: '600px',
       data: item
     });
     debugger;
     dialogRef.afterClosed().subscribe(result => {
       // check if the result has value
       if(result) {
         // result is updated budgetItems
         // replace the item with submiited  item from the form
         //this.budgetItems[this.budgetItems.indexOf(item)]= result;
         this.update.emit({
          old: item,
          new: result
         });
       }
     })
   }
}
export interface updateEvent{
  old: BudgetItem;
  new: BudgetItem;
}