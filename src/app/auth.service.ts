import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import{user} from './user';
@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {
 User:any;

 
  constructor(private router:Router,private service:DataService) {
    
    this.User={
      userId:"",
      firstName :"",
      lastName:"",
      email:"1",
      password:"1",
      userRole :"",
      userStatus:"",
      addressId:"",
      dob:"",
      photo:"",
      status:""};
    

   }
   canActivate(route: ActivatedRouteSnapshot, state:RouterStateSnapshot)
   {
     if(this.IsLoggedIn())
     {
       return true;
     }
     else
     {
       this.router.navigate(['login']);
       return false;
     }
     
   }
   IsLoggedIn()
   {
     if(window.sessionStorage.getItem("active")!= null && window.sessionStorage.getItem("active")=="1")
     {
       return true;
     }
     return false;
   }
   CheckUser(userDetails)
   {
// debugger;
     this.service.Login(userDetails).subscribe((res)=>{
       console.log("res"+res);
       this.User.userId = res["userId"];
       this.User.firstName = res["firstName"];
       this.User.lastName = res["lastName"];
       this.User.email = res["email"];
       this.User.userStatus=res["userStatus"];
       this.User.password = res["password"];
       this.User.userRole = res["userRole"];
       this.User.addressId = res["addressId"];
       this.User.dob =  res["dob"];
       this.User.photo = res["photo"];
       this.User.status=res["status"];
       console.log(this.User.email+" "+ userDetails.email +" "+  this.User.password +" "+  userDetails.password);

   
     },(error)=>{
       console.log(error)
     })
    
     console.log(this.User);
     
     console.log(this.User.email);
      console.log(this.User.email+" "+ userDetails.email +" "+  this.User.password +" "+  userDetails.password);
     
      if(this.User.email == userDetails.email && this.User.password == userDetails.password)
      {
        
        window.sessionStorage.setItem("active","1");
        window.sessionStorage.setItem("user",JSON.stringify(this.User));
        
  
        return true;
      }
      else
      {
        return false;
      }
   }

   SignOut()
  {
    window.sessionStorage.setItem("active","0");
    window.sessionStorage.removeItem("user");
  }
}
