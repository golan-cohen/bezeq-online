import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  hide = true;
  index: string | undefined;
  constructor(private http: HttpClient ,public authService: AuthService, private router: Router) { }
  ngOnInit(): void {
    this.index = this.router.url.toString().substr(1,6);
  }

  onLogin(form: NgForm)  {
    if(form.invalid)
      return;
    form.controls['currectIndex'].setValue(this.index);
    this.authService.loginUser(form.value);
    form.resetForm();
  }
  backButton()  {
    this.router.navigateByUrl(this.router.url.toString().substr(1,6));
  }
}
