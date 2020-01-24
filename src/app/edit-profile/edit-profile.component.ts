import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  confirmPassword:any;
  message:any;
  userdetails:any;
//   userdetails = {
    
//     password: "",
//     firstName: "",
//     lastName: "",
//     userRole: "",
//     dob: "",
//     email: "",
//     //photo:"",
//     gender: "",
//     status: "",
//     phoneNo: "",
//     address: {
//         houseNo: "",
//         area: "",
//         city: "",
//         district: "",
//         state: "",
//         country: "",
//         pincode: ""
//     }
//  }
  constructor(private route:ActivatedRoute,private router:Router,private service:DataService) {
    this.confirmPassword="";
   }

  ngOnInit() {

    this.route.paramMap.subscribe((data)=>{
      let observableResult = this.service.profile();
      observableResult.subscribe((result)=>{
      console.log(result);
      this.userdetails=result;
       });
  })
  }
onCancel()
  {
    if(this.userdetails.userRole=='WHOLESALER')
    {
      console.log("inside whl")
    this.router.navigate(['/wholesalerHome']);
    }
    else{
    this.router.navigate(['/farmerHome']);}
  }
  onSubmit(userdetails)
  {
    console.log("on submit")
    console.log(this.confirmPassword);
    console.log(this.userdetails.password);
    if(this.confirmPassword==this.userdetails.password)
      {
      console.log(this.userdetails);
      this.route.paramMap.subscribe((data)=>{
        let observableResult = this.service.updateProfile(this.userdetails);
        observableResult.subscribe((result)=>{
        console.log(result);
        alert("profile Updated successfully");
        console.log(this.userdetails.userRole);
        if(this.userdetails.userRole=='WHOLESALER')
        {
          console.log("inside whl")
        this.router.navigate(['/wholesalerHome']);
        }
        else{
        this.router.navigate(['/farmerHome']);}
        
      });
    })
  }else
    {
      this.message = "confirm Password Mismatch..!";
    } 
  }
  
}
