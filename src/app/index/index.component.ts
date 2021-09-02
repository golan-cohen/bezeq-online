import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})


export class indexComponent implements OnInit{
  index: string = this.router.url.toString().substr(1 , 6);
  currectUser: any = {};

  constructor(private router: Router ){}

  ngOnInit(): void {
    this.getUser();
    this.switchIndex();

  }

  RegisterToggle(){
    this.router.navigateByUrl(this.router.url+'/register');
  }
  LoginToggle(){
    this.router.navigateByUrl(this.router.url+'/login');
  }
  getUser() {
    this.currectUser = JSON.parse(localStorage.getItem('user') as string);
  }

  switchIndex(){

    if(this.currectUser != null)  {
    if(this.currectUser.index != this.router.url.toString().substr(1,6))
      this.router.navigateByUrl(this.currectUser.index);
    else{
      this.router.navigateByUrl("/"+this.currectUser.index+"/secret_page"+this.currectUser.index[5]);
    }
  }
  }
  backButton()  {
    this.router.navigateByUrl("");
  }
}
