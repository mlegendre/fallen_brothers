import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'about-us', component: AboutUsComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    NavbarComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes, {enableTracing: true}
    ),
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
