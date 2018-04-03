import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

const routes: Routes = [
  { path: 'about-us', component: AboutUsComponent },
  // { path: '', redirectTo: '/home', component: HomeComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports:[ RouterModule ]
})
export class AppRoutingModule { }
