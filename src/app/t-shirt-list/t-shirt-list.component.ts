import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-t-shirt-list',
  templateUrl: './t-shirt-list.component.html',
  styleUrls: ['./t-shirt-list.component.css'],
})
export class TShirtListComponent {
  constructor(private router: Router) {}

  goToHomepage() {
    this.router.navigate(['/']);
  }

  goPurchaseForm() {
    this.router.navigate(['/purchase-form']);
  }
}
