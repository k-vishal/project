import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  confirmPassword:any;
  message:any;
  userdetails = {
    
    password: "",
    firstName: "",
    lastName: "",
    userRole: "",
    dob: "",
    email: "",
    //photo:"",
    gender: "",
    status: "",
    phoneNo: "",
    address: {
        houseNo: "",
        area: "",
        city: "",
        district: "",
        state: "",
        country: "",
        pincode: ""
    }
  }
  constructor(private route:ActivatedRoute,private router:Router,private service:DataService) { }

  ngOnInit() {
  }
  onReset()  {
    this.router.navigate(['/register']);
  }
  onCancel()
  {
    this.router.navigate(['/home']);
  }
  onSignup()
  {
    console.log("sdrtyujhcxswertyh");
     console.log(this.userdetails);
    if(this.confirmPassword==this.userdetails.password)
            {
              console.log("inside first if");
            if(this.userdetails.userRole=="ADMIN")
            this.userdetails.status="ADMIN";
            else if(this.userdetails.userRole=="CPF")
            this.userdetails.status="BLOCKED";
            else  
                this.userdetails.status="ACTIVE";
              
                this.route.paramMap.subscribe((data)=>{
                  let observableResult = this.service.Register(this.userdetails);
                  observableResult.subscribe((result)=>{
                  console.log(result);
                  alert("account created successfully, please log in");
                  this.router.navigate(['/login']);
                      
                    });
                  })
                  
                
            }
    else
      {
        this.message = "UserName/Password Mismatch..!";
      } 
      console.log(this.userdetails);
  }

}
