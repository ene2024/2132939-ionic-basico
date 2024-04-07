import { Component } from '@angular/core';

@Component({
  selector: 'app-bottom-delete',
  templateUrl: './bottom-delete.component.html',
  styleUrls: ['./bottom-delete.component.scss'],
})
export class BottomDeleteComponent {

  isActionSheetOpen = false;
  public actionSheetButtons = [
    {
      text: 'Delete',
      role: 'destructive',
      data: {
        action: 'delete',
      },
    },
    {
      text: 'Cancel',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];

  setOpen(isOpen: boolean) {
    this.isActionSheetOpen = isOpen;
  }

}
