import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class SecretGuard implements CanActivate {
  currectUser: any | undefined;
  constructor(private router: Router){}

  canActivate(index: any): boolean {
    this.currectUser = JSON.parse(localStorage.getItem('user') as string);
    if(!this.currectUser){
      this.router.navigateByUrl("");
      return false;}
      return true;
    }
  }
