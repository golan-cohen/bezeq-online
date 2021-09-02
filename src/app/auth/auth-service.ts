import { HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { ReplaySubject} from "rxjs";

@Injectable({providedIn: "root"})
export class AuthService  {

  private expiresInDuration: number = 0;
  private currentUser = new ReplaySubject(1);
  currentUser$ = this.currentUser.asObservable();

  constructor(private http: HttpClient , private router: Router) {}

  createUser(form: NgForm){
    this.http.post('http://localhost:3000/api/register' , form)
    .subscribe((responseData) => {
      console.log(responseData);

      this.router.navigate([this.router.url.toString().substr(0,7)+'/login']);
    });
  }

  loginUser(form: NgForm){
    this.http.post<{expiresIn:number}>('http://localhost:3000/api/login' , form , )
    .subscribe((responseData) => {
      const user = responseData;
      if(user)
        this.expiresInDuration = user.expiresIn;
        setTimeout(() =>
        {this.logoutUser();}
        , this.expiresInDuration * 1000)
        localStorage.setItem('user', JSON.stringify(user));
        this.currentUser.next(user);

      if (this.router.url.toString().substr(1,6) == "index1")
        this.router.navigate(["/index1/secret_page1"]);
      else
        this.router.navigate(["/index2/secret_page2"]);
    });
  }


  setCurrentUser(user: any) {
    this.currentUser.next(user);
  }

  logoutUser()  {
    localStorage.removeItem('user');
    this.currentUser.next(null);

  }


}
