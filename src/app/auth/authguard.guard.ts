import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginForm } from './auth';
import {RouterModule,Router} from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  constructor(private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean {

      
      
      let data: LoginForm[]= [
        {
        email: 'disha@gmail.com',
        password:'1234'
        },
        {
          email: 'isha@gmail.com',
        password:'4321'
        } 
      ]
      

      let user = JSON.parse(localStorage.getItem('user1') || '{}');
      for (let id =0; id <2; id++) {
  
        if(user.email == data[id].email && user.password == data[id].password ){
            return true;
        }
      }
      // localStorage.clear();
      this.router.navigateByUrl('login')
      return false;
    }
  
}
