import { Component } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';


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

    axios.post('https://jsonplaceholder.typicode.com/users', {
      name: this.name,
      phone: this.phone,
      address: this.address
    })
      .then(response => {
        console.log(response.data);
        alert('SUCESSO EM SALVAR OS SEGUINTES DADOS: ' + JSON.stringify(response.data));
        this.saveUserInJsonServer();
      })
      .catch(error => {
        console.error(error);
        alert('ERRO: ' + JSON.stringify(error));
        this.router.navigate(['/t-shirt-list']);
      });
    }

      saveUserInJsonServer() {
        axios.post('http://localhost:3000/users', {
          name: this.name,
          phone: this.phone,
          address: this.address,
        })
          .then(response => {
            console.log(response.data);
            alert('Usuário salvo com sucesso no JSON Server!');
            this.router.navigate(['/t-shirt-list']);
          })
          .catch(error => {
            console.error(error);
            alert('Erro ao salvar usuário no JSON Server!');
            this.router.navigate(['/t-shirt-list']);
          });
    }

  // Função de validação de endereço
  validateAddress(address: string): boolean {
  const regex = /^[a-zA-Z0-9\s]+$/;
  return !address || !regex.test(address);
} 

}
