import { Component } from '@angular/core';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { faCodePullRequest } from '@fortawesome/free-solid-svg-icons';
import { faFile } from '@fortawesome/free-regular-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  faHouse = faHouse;
  faClock = faClock;
  faCreditCard = faCreditCard;
  faCodePullRequest = faCodePullRequest;
  faFile = faFile;
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
