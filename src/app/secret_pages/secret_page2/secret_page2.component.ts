import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth-service';

@Component({
  selector: 'secret_page2',
  templateUrl: './secret_page2.html',
  styleUrls: ['./secret_page2.css']
})


export class secret_page2Component  implements OnInit{
  currectUser: any = {};
  constructor( private router: Router , private authService: AuthService)  {}
  ngOnInit(): void {
    this.getUser();
    if(this.currectUser.index != this.router.url.toString().substr(1,6))
      this.router.navigateByUrl("");
  }

  homeToggleAndLogout()
  {
    this.authService.logoutUser();
    this.router.navigateByUrl("");
  }
  homeToggle()
  {
    this.router.navigateByUrl("");
  }
  getUser() {
    this.currectUser = JSON.parse(localStorage.getItem('user') as string);
  }
  }
