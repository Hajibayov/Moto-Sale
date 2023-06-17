import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css'],
})
export class DragDropComponent {
  products = [
    {
      title: 'Custom Rider Solid',
      poster:
        'https://demo.yolotheme.com/motor/wp-content/uploads/2016/01/84-550x620.jpg',
    },
    {
      title: 'ARMR Moto Kiso Jacket',
      poster:
        'https://demo.yolotheme.com/motor/wp-content/uploads/2016/01/134-550x620.jpg',
    },
    {
      title: 'Comp Kid Boots – White',
      poster:
        'https://demo.yolotheme.com/motor/wp-content/uploads/2016/01/62-550x620.jpg',
    },
    {
      title: 'Knox Handroid Glove CE',
      poster:
        'https://demo.yolotheme.com/motor/wp-content/uploads/2016/01/112-550x620.jpg',
    },
    {
      title: 'Racing Leather Jacket',
      poster:
        'https://demo.yolotheme.com/motor/wp-content/uploads/2016/01/129-550x620.jpg',
    },
  ];

  wishlist = [
    {
      title: 'Arrow Exhaust – Aprilia',
      poster:
        'https://demo.yolotheme.com/motor/wp-content/uploads/2016/01/159-550x620.jpg',
    },
  ];

  drop(event: CdkDragDrop<any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
