import { Component } from '@angular/core';
import { faBox } from '@fortawesome/free-solid-svg-icons';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  faBox = faBox;
  faNewspaper = faNewspaper;
  faRightFromBracket = faRightFromBracket;
  faUsers = faUsers;
  isSidebarOpen = true;
  isOpen = false;

  onSidebarToggle(event: any) {
    console.log(event);

    this.isSidebarOpen = event;
  }
  constructor(public router: Router) {}

  navigateDoc() {
    window.open('https://documenter.getpostman.com/view/25696653/2s935rJNGa');
  }
  public toggleMenu() {
    this.isOpen = !this.isOpen;
  }
}
