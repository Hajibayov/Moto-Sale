import { Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
})
export class TeamComponent {
  ngOnInit(): void {
    AOS.init();
  }
  slides = [
    {
      img: 'https://demo.yolotheme.com/motor/wp-content/uploads/2016/02/chris_ronaldo.jpg',
      detail: 'Leo Messi',
      position: 'CEO',
    },
    {
      img: 'https://demo.yolotheme.com/motor/wp-content/uploads/2016/02/john_doe.jpg',
      detail: 'Chris Ronaldo',
      position: 'Director',
    },
    {
      img: 'https://demo.yolotheme.com/motor/wp-content/uploads/2016/02/leo_messi.jpg',
      detail: 'Jonh Doe',
      position: 'HR',
    },
    {
      img: 'https://demo.yolotheme.com/motor/wp-content/uploads/2016/02/john_doe.jpg',
      detail: 'Neymar Jr',
      position: 'Manager',
    },
  ];

  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
}
