import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;
  ver_pass: boolean = false;

  constructor(
    private loginservice: LoginService
  ) { }

  ngOnInit(): void {
   
  }


  authGloogle(){
    this.loginservice.loginGoogle().then(result =>{
      console.log(result);
    });
  }


  // mostrarContrasena(){
  //   let tipo: any = document.getElementById('password');
  //   if(tipo.type == 'password'){
  //       tipo.type = 'text';
  //       this.ver_pass = true;
  //   }else{
  //       tipo.type = 'password';
  //       this.ver_pass = false;
  //   }
  // }

}
