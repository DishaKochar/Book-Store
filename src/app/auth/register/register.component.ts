import { Component, OnInit } from '@angular/core';
import { RegisterForm } from '../auth';
//import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register: RegisterForm ={
    email: '',
    password:'',
    confirmpassword:''
  };

  passwordMatched: boolean= true;

  submit(){
    // if(this.register.password!=this.register.confirmpassword){
    //     this.passwordMatched=false;
    //     return;
    // }
    // const auth = getAuth();
    // createUserWithEmailAndPassword(auth, this.register.email, this.register.password)
    //   .then((userCredential) => {
    //     // Signed in 
    //     //const user = userCredential.user;
    //     console.log(userCredential);
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     // ..
    //   });
  }

  constructor() { }

  ngOnInit(): void {
  }

}
