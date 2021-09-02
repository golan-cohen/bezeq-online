import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from '@angular/router';
import { AuthService } from '../auth-service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {

  hide = true;
  constructor(private router: Router ,public authService: AuthService) { }

  onRegister(form: NgForm)  {
    if(form.invalid)
      return;
    this.authService.createUser(form.value);
    form.resetForm();
  }

  backButton()  {
    this.router.navigateByUrl(this.router.url.toString().substr(1,6));
  }

}
