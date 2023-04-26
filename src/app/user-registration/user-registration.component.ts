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
    localStorage.setItem('name', this.name);
    localStorage.setItem('phone', this.phone);
    localStorage.setItem('address', this.address);

    const data = `Nome: ${this.name}\nTelefone: ${this.phone}\nEndereço: ${this.address}`;
    alert(data);
    this.router.navigate(['/t-shirt-list']);
  }

  // Função de validação de endereço
  validateAddress(address: string): boolean {
  const regex = /^[a-zA-Z0-9\s]+$/;
  return !address || !regex.test(address);
} 
}
