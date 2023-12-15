import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductVM } from './productVM.model';
import { CabinetService } from '../cabinet.service';
import { CommonFilter } from '../common-filter.model';
import { MatPaginator } from '@angular/material/paginator';
import { ResponseListTotal } from 'src/app/models/response-list-total.model';
import { MatDialog } from '@angular/material/dialog';
import { NewProductDialogComponent } from '../new-product-dialog/new-product-dialog.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  displayedColumns: string[] = [
    'name',
    'brand',
    'category',
    'color',
    'stock_quantity',
    'price',
    'created_at',
    'operation',
  ];
  dataSource: ProductVM[] = [];
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
    this.getProducts();
  }

  getProducts() {
    this.showSpinner = true;
    let filterModel = new CommonFilter(this.currentPage + 1, this.pageSize);
    this.cabinetService.getProducts(filterModel).subscribe({
      next: (res: ResponseListTotal<ProductVM>) => {
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
    this.getProducts();
  }

  onEdit(element: any) {
    let dialogRef = this.dialog.open(NewProductDialogComponent, {
      width: '500px',
      data: {
        form: element,
      },
    });
    dialogRef.afterClosed().subscribe((data) => {
      if (data) {
        this.getProducts();
      }
    });
  }

  onCreate() {
    this.dialog.open(NewProductDialogComponent, {
      width: '500px',
    });
  }

  onDelete(id: number) {
    console.log("test");
    this.showSpinner = true;
    this.cabinetService.deleteProducts(id).subscribe((res) => {
      alert(res.status.message);
      this.getProducts();
      this.showSpinner = false;
    });
  }
}
