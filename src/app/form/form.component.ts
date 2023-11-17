import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MessageDialogComponent } from '../message-dialog/message-dialog.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  unamePattern = '^[a-z0-9_-]{8,15}$';
  pwdPattern = '^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?!.*s).{6,12}$';
  mobnumPattern = '^((\\+91-?)|0)?[0-9]{10}$';
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';
  constructor(private fb: FormBuilder, public dialog: MatDialog) {}
  mainForm = this.fb.group({
    fullName: ['', [Validators.required]],
    phone: ['', [Validators.required]],
    email: ['', [Validators.required]],
    website: ['', Validators.required],
    message: ['', Validators.required],
  });
  onSubmit() {
    console.log(this.mainForm);
    let dialogRef = this.dialog.open(MessageDialogComponent, {
      height: '350px',
      width: '600px',
      data: this.mainForm.value,
    });
  }
}
