import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MessageDialogComponent } from '../message-dialog/message-dialog.component';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  unamePattern = '^[a-z0-9_-]{8,15}$';
  pwdPattern = '^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?!.*s).{6,12}$';
  mobnumPattern = '^((\\+91-?)|0)?[0-9]{10}$';
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';
  constructor(private fb: FormBuilder, public dialog: MatDialog) {}
  mainForm = this.fb.group({
    fullName: [
      '',
      [Validators.required, Validators.pattern(this.unamePattern)],
    ],
    birthDate: ['', Validators.required],
    phone: ['', [Validators.required, Validators.pattern(this.mobnumPattern)]],
    email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
    teamName: ['', Validators.required],
    teamMembers: this.fb.array(
      [],
      [Validators.required, Validators.maxLength(10)]
    ),
  });

  ngOnInit(): void {}

  get teamMembers() {
    return this.mainForm.controls['teamMembers'] as FormArray;
  }

  addTeamMember() {
    const memberForm = this.fb.group({
      memberName: [''],
      memberBirthDate: ['', Validators.required],
      memberPhone: [
        '',
        [Validators.required, Validators.pattern(this.mobnumPattern)],
      ],
    });
    this.teamMembers.push(memberForm);
  }
  onSubmit() {
    console.log(this.mainForm);
    this.dialog.open(MessageDialogComponent);
  }
  deleteMember(index: number) {
    this.teamMembers.removeAt(index);
  }
}
