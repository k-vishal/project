import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-farmer-portal',
  templateUrl: './farmer-portal.component.html',
  styleUrls: ['./farmer-portal.component.css']
})
export class FarmerPortalComponent implements OnInit {

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
