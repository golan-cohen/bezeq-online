import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth-service';
import { AuthGuard } from '../auth/auth.guard';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
currectUser: any = {};

constructor(private router: Router , private authService: AuthService , private guard:AuthGuard){}
  ngOnInit(): void {
    this.setCurrentUser();
    this.getUser();
  }
  setCurrentUser()  {
    const user = JSON.parse(localStorage.getItem('user') as string);
    this.authService.setCurrentUser(user);
  }

  index1Toggle()  {
    const index = "index1";
    if(!this.currectUser )
      this.router.navigateByUrl('/index1');
    else if(this.guard.canActivate(index))
      this.router.navigateByUrl('/index1/secret_page1');
  }
  index2Toggle()  {
    const index = "index2";
    if(!this.currectUser)
      this.router.navigateByUrl('/index2');
      else if(this.guard.canActivate(index))
      this.router.navigateByUrl('/index2/secret_page2');
  }
  getUser() {
    this.currectUser = JSON.parse(localStorage.getItem('user') as string);
  }

}
