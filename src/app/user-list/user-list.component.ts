import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    axios.get('http://localhost:3000/users')
      .then(response => {
        console.log(response.data);
        this.users = response.data;
      })
      .catch(error => {
        console.error(error);
      });
  }

  formatarTelefone(telefone: string): string {
    const ddd = telefone.slice(0, 2);
    const primeiraparte = telefone.slice(2, 7);
    const segundaparte = telefone.slice(7);
    return `${ddd}-${primeiraparte}-${segundaparte}`;
  }
}