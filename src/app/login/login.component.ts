import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username : string ="";
  password : string ="";
  show: boolean= false;
submit(){
//console.log("user name is " + this.username)
  if(this.username=="Negi" && this.password=="123"){
    this.clear();
  }else{
    this.show = false;
    alert("login Fail")
  }
  
 
}
clear(){
  this.username ="";
  this.password = "";
  this.show = true;
}
}
