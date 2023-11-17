import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-message-dialog',
  templateUrl: './message-dialog.component.html',
  styleUrls: ['./message-dialog.component.scss'],
})
export class MessageDialogComponent implements OnInit {
  spinner: boolean = true;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
  ngOnInit() {
    // this.showSpinner();
  }
  reloadPage() {
    window.location.reload();
  }
  // showSpinner() {
  //   this.spinner = true;
  //   setTimeout(function () {
  //     console.log(123);
  //     this.spinner = true;
  //   }, 3000);
    
  // }
}
