import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wholesaler-portal',
  templateUrl: './wholesaler-portal.component.html',
  styleUrls: ['./wholesaler-portal.component.css']
})
export class WholesalerPortalComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  onlogin()  {
    this.router.navigate(['/login']);
  }
  onRegister()
  {
    this.router.navigate(['/register']);
  }

}
