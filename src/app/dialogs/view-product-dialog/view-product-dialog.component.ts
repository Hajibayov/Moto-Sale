import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-view-product-dialog',
  templateUrl: './view-product-dialog.component.html',
  styleUrls: ['./view-product-dialog.component.scss'],
})
export class ViewProductDialogComponent implements OnInit {
  faXmark = faXmark;
  imagesConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    asNavFor: '.thumbs',
    draggable: false,
  };
  thumbsConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    centerMode: true,
    draggable: true,
    focusOnSelect: true,
    asNavFor: '.images',
  };
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {}
}
