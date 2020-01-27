import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-pending-course',
  templateUrl: './pending-course.component.html',
  styleUrls: ['./pending-course.component.css']
})
export class PendingCourseComponent implements OnInit {
  pendingCourseList:any;
  constructor(private route:ActivatedRoute,private router:Router,private service:DataService) {  }

  ngOnInit() {
    this.route.paramMap.subscribe((data)=>{
      let observableResult = this.service.pendingCourseList();
      observableResult.subscribe((result)=>{
      console.log(result);
      this.pendingCourseList=result;
       });
  })
  console.log(this.pendingCourseList);
  }

}
