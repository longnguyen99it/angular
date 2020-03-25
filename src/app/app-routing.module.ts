import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ManagerComponent } from './manager/manager.component';
import { DetailsComponent } from './details/details.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'manager', component: ManagerComponent},
  {path: 'details/:ProductID', component: DetailsComponent},
  {path: 'remover/:ProductID', component: ManagerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
