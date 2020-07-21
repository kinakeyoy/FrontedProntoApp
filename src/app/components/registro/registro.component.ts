import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IUser } from '../interfaces/usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  hide = true;

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
    ],
    displayName: [null, Validators.compose([
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20)
    ])
    ]
  });

  user: IUser = {
    email: '',
    password: '',
  };

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  registro() {
    console.log(this.user);
  }
}
