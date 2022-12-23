// import { GoogleLoginProvider, SocialAuthService } from '@abacritt/angularx-social-login';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService implements OnInit {
  isLoggedGoogleIn = false

  constructor(private http: HttpClient, private authService: SocialAuthService) { }
  ngOnInit(): void {
    this.getLoginGoogle()
  }

  getData() {
    return this.http.get('https://dummyapi.io/data/v1/user?page=1&limit=50')
  }
  deleteData(id: number) {
    return this.http.delete('https://dummyapi.io/data/v1/user/' + id)
  }
  post(data: any) {
    return this.http.post('https://dummyapi.io/data/v1/user/create', data)
  }
  edit(data: any, id: number) {
    return this.http.put('https://dummyapi.io/data/v1/user/' + id, data)
  }



  subject = new BehaviorSubject(false)
  getLoginGoogle() {
    console.log('google Info')
    return this.authService.authState
  }
  signInWithGoogle(): void {
    console.log('signIn')
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    console.log('signIn')
  }

  signOut(): void {
    this.authService.signOut();
    console.log('signOut')
  }
}
