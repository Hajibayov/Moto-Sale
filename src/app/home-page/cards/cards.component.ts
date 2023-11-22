import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { MatDialog } from '@angular/material/dialog';
import { ViewProductDialogComponent } from 'src/app/view-product-dialog/view-product-dialog.component';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  faMagnifyingGlass = faMagnifyingGlass;
  products = [];
  constructor(private homeService: HomeService, private dialog: MatDialog) {}
  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.homeService.getProducts().subscribe((res) => {
      this.products = res;
      console.log(this.products);
    });
  }
  onView(data: any) {
    this.dialog.open(ViewProductDialogComponent, {
      width: '800px',
      data: data,
    });
  }
}
