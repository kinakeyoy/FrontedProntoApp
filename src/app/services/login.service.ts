import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as auth from 'firebase/auth';
import * as firebase from 'firebase/app';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public afAuth: AngularFireAuth) { }


  async loginGoogle(){

    try{
      return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }catch(err){
      return  console.log(err);
    }
  }
}
