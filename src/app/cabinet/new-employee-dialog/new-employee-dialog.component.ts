import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { CabinetService } from '../cabinet.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeVM } from '../employees/employeeVM.model';

@Component({
  selector: 'app-new-employee-dialog',
  templateUrl: './new-employee-dialog.component.html',
  styleUrls: ['./new-employee-dialog.component.scss'],
})
export class NewEmployeeDialogComponent implements OnInit {
  faXmark = faXmark;
  formData: any;
  myForm: any;
  id: number;
  brandList: any;
  categoriesList: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private cabinetService: CabinetService
  ) {}
  ngOnInit(): void {
    if (this.data) {
      this.formData = this.data.form;
      console.log(this.formData);
      this.myForm = new FormGroup({
        name: new FormControl(this.formData.name, Validators.required),
        surname: new FormControl(this.formData.surname, Validators.required),
        role: new FormControl(this.formData.role, Validators.required),
        phone: new FormControl(this.formData.phone, Validators.required),
        email: new FormControl(this.formData.email, Validators.required),
        imageUrl: new FormControl(this.formData.imageUrl, Validators.required),
      });
    } else {
      this.myForm = new FormGroup({
        name: new FormControl('', Validators.required),
        surname: new FormControl('', Validators.required),
        role: new FormControl('', Validators.required),
        phone: new FormControl('', Validators.required),
        email: new FormControl('', Validators.required),
        imageUrl: new FormControl('', Validators.required),
      });
    }
  }

  onSubmit() {
    if (this.data) {
      let employeeData = new EmployeeVM(
        this.myForm.value.name,
        this.myForm.value.surname,
        this.myForm.value.role,
        this.myForm.value.phone,
        this.myForm.value.email,
        this.myForm.value.imageUrl
      );
      this.cabinetService
        .updateEmployee(employeeData, this.formData.id)
        .subscribe(
          (res) => {
            console.log(this.formData.id);
            alert(res);
          },
          (error) => {
            alert(error.message);
          }
        );
    } else {
      let employeeData = new EmployeeVM(
        this.myForm.value.name,
        this.myForm.value.surname,
        this.myForm.value.role,
        this.myForm.value.phone,
        this.myForm.value.email,
        this.myForm.value.imageUrl
      );
      console.log(employeeData);
      this.cabinetService.createEmployee(employeeData).subscribe(
        (res) => {
          alert(res);
        },
        (error) => {
          alert(error.message);
        }
      );
    }
    window.location.reload();
  }
}
