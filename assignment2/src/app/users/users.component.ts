import { user } from './../models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  constructor() { }

  //Random users
  users : user[] = [
    {
      name : "Saurav",
      userName : "saurav354",
      email : "sauravl@gmail.com"
    },
    {
      name : "Anup",
      userName : "anup4674",
      email : "anup374@gmail.com"
    },
    {
      name : "Raman",
      userName : "raman45895",
      email : "ramanb75@gmail.com"
    },
    {
      name : "Vinod",
      userName : "vnod4754",
      email : "20nod@gmail.com"
    },
    {
      name : "Krishna",
      userName : "krish3765",
      email : "krish3@gmail.com"
    },
  ]; 

}
