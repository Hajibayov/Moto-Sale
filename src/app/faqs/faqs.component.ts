import { Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss'],
})
export class FaqsComponent {
  routeName = 'Faqs';
  ngOnInit(): void {
    AOS.init();
  }
}
