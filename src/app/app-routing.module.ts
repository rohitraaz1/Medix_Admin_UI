import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Authorization _Screens/login/login.component';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import { NavbarComponent } from './Dashboard/navbar/navbar.component';

const routes: Routes = [
  { path:'',redirectTo: '/login', pathMatch:'full', },
  { path:'navbar', component:NavbarComponent },
  {path: 'login',component:LoginComponent},
  // {path: 'signup', component:SignUpComponent},
  { path:'dashboard',component:DashboardComponent },
  // { path:'addProduct', component:AddProductComponent },
  // { path:'viewProduct', component:ViewProductsComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
