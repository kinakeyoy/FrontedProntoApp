import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public afAuth: AngularFireAuth, private ruta: Router) { }


  async loginGoogle(){

    try{
      return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(() => {
        this.ruta.navigate(['/home']);
      });
    }catch(err){
      return  console.log(err);
    }
  }
}
