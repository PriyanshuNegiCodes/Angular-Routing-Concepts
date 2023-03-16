import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username : string ="";
  password : string ="";
  show: boolean= false;

  constructor(private service:AuthenticationService){}

submit(){
//console.log("user name is " + this.username)
  if(this.username=="Negi" && this.password=="123"){
    this.service.loggedIn();
    this.clear();
  }

}
LogOut(){
  this.service.loggedOut();
}

clear(){
  this.username ="";
  this.password = "";
  this.show = true;
}
}
