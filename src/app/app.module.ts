import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

import { environment } from './../environments/environment';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AccountComponent } from './account/account.component';

import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'account', component: AccountComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full'}
]

export const firebaseCofig = {
  apiKey: "AIzaSyCFvuKy_wxFZECoVfxHdTEA6wforkzPpak",
  authDomain: "fitness-3bdd3.firebaseapp.com",
  databaseURL: "https://fitness-3bdd3.firebaseio.com",
  projectId: "fitness-3bdd3",
  storageBucket: "",
  messagingSenderId: "1013466222784"
}

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    HomeComponent,
    SignInComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
