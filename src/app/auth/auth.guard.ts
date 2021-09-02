import { Injectable, OnInit } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth-service";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  currectUser: any | undefined;
  constructor(private authService: AuthService, private router: Router){}

  canActivate(index: any): boolean {
    this.currectUser = JSON.parse(localStorage.getItem('user') as string);
    if(this.currectUser?.index == index)
      return true;
      this.router.navigateByUrl("");
    return false;
  }

}
