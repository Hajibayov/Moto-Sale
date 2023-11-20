import { Component } from '@angular/core';
import { faCcPaypal } from '@fortawesome/free-brands-svg-icons';
import { faCcMastercard } from '@fortawesome/free-brands-svg-icons';
import { faCcVisa } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  faCcPaypal = faCcPaypal;
  faCcMastercard = faCcMastercard;
  faCcVisa = faCcVisa;
}
