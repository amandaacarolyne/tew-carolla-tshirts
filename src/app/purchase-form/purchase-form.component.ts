import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-purchase-form',
  templateUrl: './purchase-form.component.html',
  styleUrls: ['./purchase-form.component.css'],
})
export class PurchaseFormComponent {
  constructor(private router: Router) {}

  goToHomepage() {
    this.router.navigate(['/']);
  }
}
