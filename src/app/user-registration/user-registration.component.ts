import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css'],
})
export class UserRegistrationComponent {
  name: string = '';
  phone: string = '';
  address: string = '';

  constructor(private router: Router) {}

  saveAndNavigateToList() {
    // add aqui codigo para salvar os dados do formulário

    this.router.navigate(['/t-shirt-list']);
  }
}
