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
    // Adicione aqui o código para salvar os dados do formulário

    this.router.navigate(['/t-shirt-list']);
  }

  // Função de validação de endereço
  validateAddress(address: string): boolean {
  const regex = /^[a-zA-Z0-9\s]+$/;
  return !address || !regex.test(address);
}
}
