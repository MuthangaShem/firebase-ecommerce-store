import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	socialAuth: boolean;

  constructor(public afAuth: AngularFireAuth) { }

  ngOnInit() {
  	this.socialAuth = true;
  }

  login(){
  	this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

}
