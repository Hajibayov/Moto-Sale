import { Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
})
export class WishlistComponent {
  ngOnInit(): void {
    AOS.init();
  }
}
