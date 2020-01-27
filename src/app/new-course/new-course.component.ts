import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.css']
})
export class NewCourseComponent implements OnInit {
  u:any;
  userDetails:any;
  courseName:any;
  courseLocation:any;
  startDate:any;
  courseDays:any;
  noOfReq:any;
  courseStatus:any;
  constructor(private route:ActivatedRoute,private router:Router,private service:DataService) {
    this.u = JSON.parse(window.sessionStorage.getItem("user"));
    console.log(this.u);
   }
   newCourse=
   {
    courseName:"",
    courseLocation:"",
    startDate:"",
    courseDays:"",
  //  noOfReq:"",
    courseStatus:"",
   }

  ngOnInit() {
  }
  onCancel()
  {
    this.router.navigate(["/cpfHome"]);
  }
  onSubmit()
  {
    
    console.log(this.newCourse);
    this.newCourse.courseStatus="PENDING";
  console.log(this.newCourse.courseStatus);
  console.log(this.newCourse);

  this.route.paramMap.subscribe((data)=>{
    let observableResult = this.service.NewCourse(this.newCourse);
    observableResult.subscribe((result)=>{
    console.log(result);
    alert("Course Added Successfully, Admin will soon approve it");
    this.router.navigate(['/schedules']);
 
//   this.route.paramMap.subscribe((data)=>{
//     let observableResult = this.service.AddNewAdv(formData);
//     observableResult.subscribe((result)=>{
//     console.log(result);
//     alert("New Crop Advertisement added successfully");
//     this.router.navigate(['/farmerHome']);
    
   });
 })
 
}

}
