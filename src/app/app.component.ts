import { Component,OnInit } from '@angular/core';
import { userService } from './shared/services/userService';
import {User} from './shared/models/user';
//import { ROUTER_DIRECTIVES } from '@angular/router';
@Component({
  selector: 'app-root',
  template: `<div *ngIf="users">
  <div *ngFor="let user of users">
    <p>{{user.first_name}}</p>
  </div>
   <router-outlet></router-outlet>
</div>`,
  styleUrls: ['./app.component.css'],
  providers:[userService],
  
})
export class AppComponent implements OnInit{
users:User[];
usersUrl:string="https://reqres.in/api/users";

//private serviceHTTP;
constructor(private serviceHTTP:userService){}
ngOnInit(){
this.serviceHTTP.getUsers()
.subscribe(users=>this.users=users);
}
}