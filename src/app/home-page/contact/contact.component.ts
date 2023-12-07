import { Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  routeName = 'Contact';
  ngOnInit(): void {
    AOS.init();
  }
}
