import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-wholesaler-profile',
  templateUrl: './wholesaler-profile.component.html',
  styleUrls: ['./wholesaler-profile.component.css']
})
export class WholesalerProfileComponent implements OnInit {

  farmerProfile:any;
  constructor(private route:ActivatedRoute,private router:Router,private service:DataService) {
    // this.farmerProfile=[
    // {'FirstName':'vishal','LastName':'kumbhar','email':'vishal@gmail.com','phone':9762562606}

    // ]
  }
  ngOnInit() {
    this.route.paramMap.subscribe((data)=>{
      let observableResult = this.service.profile();
      observableResult.subscribe((result)=>{
      console.log(result);
      this.farmerProfile=result;
       });
  })
  }
  onEdit()
  {
    this.router.navigate(["/editProfile"]);
  }

}
