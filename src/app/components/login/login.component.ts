import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { IUser } from '../interfaces/usuario';
import { FormBuilder, Validators } from '@angular/forms';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  addressForm = this.fb.group({
    email: [null, Validators.compose([
      Validators.required,
      Validators.maxLength(100),
      Validators.pattern('[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}')
    ])
    ],
    password: [null, Validators.compose([
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(100)
    ])
    ]
  });

  hide = true;

  user: IUser = {
    email: '',
    password: ''
  };

  constructor(
    private loginservice: LoginService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  login() {
    console.log(this.user);

  }

  authGloogle(){
    this.loginservice.loginGoogle().then(result => {
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
