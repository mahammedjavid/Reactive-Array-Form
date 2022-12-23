import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private apiService: ApiService) { }

  @Input() userInfo: any

  isLoggedIn = false
  ngOnInit(): void {
  }

  signOut() {
    this.apiService.signOut()
  }

}
