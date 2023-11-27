import { Component } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent {
  images = [
    {
      source:
        'https://demo.yolotheme.com/motor/wp-content/uploads/2016/01/3.png',
      alt: 'Image 1',
    },
    {
      source:
        'https://demo.yolotheme.com/motor/wp-content/uploads/2016/01/5.png',
      alt: 'Image 2',
    },
    {
      source:
        'https://demo.yolotheme.com/motor/wp-content/uploads/2016/01/3.png',
      alt: 'Image 3',
    },
    {
      source:
        'https://demo.yolotheme.com/motor/wp-content/uploads/2016/01/2.png',
      alt: 'Image 3',
    },
    {
      source:
        'https://demo.yolotheme.com/motor/wp-content/uploads/2016/01/1.png',
      alt: 'Image 1',
    },
    {
      source:
        'https://demo.yolotheme.com/motor/wp-content/uploads/2016/01/4.png',
      alt: 'Image 1',
    },
  ];
}
