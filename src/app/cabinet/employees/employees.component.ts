import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { CabinetService } from '../cabinet.service';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeVM } from './employeeVM.model';
import { CommonFilter } from '../common-filter.model';
import { ResponseListTotal } from 'src/app/models/response-list-total.model';
import { NewEmployeeDialogComponent } from '../new-employee-dialog/new-employee-dialog.component';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent implements OnInit {
  displayedColumns: string[] = [
    'name',
    'surname',
    'role',
    'phone',
    'email',
    'operation',
  ];
  dataSource: EmployeeVM[] = [];
  pageSize: number = 10;
  currentPage: number = 0;
  total: number;
  @ViewChild(MatPaginator, {}) paginator: MatPaginator;
  showSpinner = false;
  constructor(
    private cabinetService: CabinetService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getEmployees();
  }
  getEmployees() {
    this.showSpinner = true;
    let filterModel = new CommonFilter(this.currentPage + 1, this.pageSize);
    this.cabinetService.getEmployees(filterModel).subscribe({
      next: (res: ResponseListTotal<EmployeeVM>) => {
        this.total = res.response.total;
        console.log(this.paginator);
        if (this.paginator) {
          this.paginator.length = this.total;
          console.log(this.paginator.length);
          if (
            this.paginator.pageIndex > 0 &&
            this.paginator.pageIndex * this.paginator.pageSize == this.total
          ) {
            this.paginator.previousPage();
            console.log(this.paginator.pageIndex);
          }
        }
        this.dataSource = res.response.data;
        console.log(res.response.data);
        this.showSpinner = false;
      },
      error: (error) => {},
    });
  }

  pageChanged(event: any) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.getEmployees();
  }

  onEdit(element: any) {
    let dialogRef = this.dialog.open(NewEmployeeDialogComponent, {
      width: '500px',
      data: {
        form: element,
      },
    });
    dialogRef.afterClosed().subscribe((data) => {
      if (data) {
        this.getEmployees();
      }
    });
  }

  onCreate() {
    this.dialog.open(NewEmployeeDialogComponent, {
      width: '500px',
    });
  }

  onDelete(id: number) {
    this.showSpinner = true;
    this.cabinetService.deleteEmployee(id).subscribe((res) => {
      alert(res.status.message);
      this.getEmployees();
      this.showSpinner = false;
    });
  }
}
