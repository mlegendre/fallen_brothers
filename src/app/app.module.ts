import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './/app-routing.module';

const appRoutes: Routes = [
  { path: 'about-us', component: AboutUsComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes, {enableTracing: true}
    ),
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
