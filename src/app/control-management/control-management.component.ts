import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-control-management',
  templateUrl: './control-management.component.html',
  styleUrls: ['./control-management.component.css']
})
export class ControlManagementComponent implements OnInit {
  userlist:any;

  constructor(private route:ActivatedRoute,private router:Router,private service:DataService) {
    // this.userlist=[
    //   {"userId":10,"userName":"user1","userRole":"Farmer", "status":"Active"},
    //   {"userId":11,"userName":"user2","userRole":"Wholesaler", "status":"Blocked"},
    //   {"userId":12,"userName":"user3","userRole":"Farmer", "status":"Active"},
    //   {"userId":13,"userName":"user4","userRole":"Wholesaler", "status":"Active"},
    // ]
  }
  ngOnInit() {
    this.route.paramMap.subscribe((data)=>{
      let observableResult = this.service.userList();
      observableResult.subscribe((result)=>{
      console.log(result);
      this.userlist=result;
       });
  })
  }
  onBlockUnblock(list)
  {
    console.log(list);
    this.route.paramMap.subscribe((data)=>{
      let observableResult = this.service.changeUserStatus(list);
      observableResult.subscribe((result)=>{
      console.log(result);
      alert("Status Updated successfully");
      this.ngOnInit();
    });
  })
 
  }

}
