import { NgModule } from "@angular/core";
import { RouterModule , Routes } from "@angular/router";
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";
import { HomeComponent } from "./home/home.component";
import { indexComponent } from "./index/index.component";
import { SecretGuard } from "./secret_pages/secret.guard";
import { secret_page1Component } from "./secret_pages/secret_page1/secret_page1.component";
import { secret_page2Component } from "./secret_pages/secret_page2/secret_page2.component";

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'index1', component: indexComponent},
  { path: 'index2', component: indexComponent},
  { path: 'index1/login', component: LoginComponent},
  { path: 'index1/register', component: RegisterComponent},
  { path: 'index2/login', component: LoginComponent},
  { path: 'index2/register', component: RegisterComponent},
  { path: 'index1/secret_page1', component: secret_page1Component, canActivate: [SecretGuard]},
  { path: 'index2/secret_page2', component: secret_page2Component, canActivate: [SecretGuard]}
];
@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule {}
