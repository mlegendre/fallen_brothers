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
import { SponsorsComponent } from './components/sponsors/sponsors.component';
import { SponsorModalComponent } from './components/sponsor-modal/sponsor-modal.component';
import { GolfTournamentComponent } from './components/golf-tournament/golf-tournament.component';
import { ChalkRunComponent } from './components/chalk-run/chalk-run.component';

const appRoutes: Routes = [
  { path: 'about-us', component: AboutUsComponent },
  { path: 'sponsors', component: SponsorsComponent },
  { path: '', component: HomeComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    SponsorsComponent,
    SponsorModalComponent,
    GolfTournamentComponent,
    ChalkRunComponent
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
