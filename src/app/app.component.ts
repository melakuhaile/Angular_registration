import { Component } from '@angular/core';
import { User } from './user';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = new User();
  users = [];
  newUser = null;

  addUser(){
      console.log(this.newUser)
      this.newUser = this.user;
      this.users.push(this.user);
      this.user = new User();
      console.log(`${this.user.firstName} has been registered.`)
  }
  // This adds a new user to the database
}
