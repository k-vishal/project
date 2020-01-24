import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userdetails = {
    email: "",
    password: ""
  };
u:any;
message;
  constructor(private authService: AuthService,private router:Router) { }

  ngOnInit() {
  }
  onCancel()  {
    this.router.navigate(['/home']);
  }
  onSignup()
  {
    this.router.navigate(['/register']);
  }
  SignIn()
  {
    

    if (this.userdetails.email.length == 0) {
      alert('enter email');
    } else if (this.userdetails.password.length ==0) {
      alert('enter password');
    } 
    else 
    {
          console.log(this.userdetails);
        let isValid =  this.authService.CheckUser(this.userdetails);
        console.log(isValid);
      if(isValid)
      {   this.u = JSON.parse(window.sessionStorage.getItem("user"));
        
          console.log(this.u);
          console.log(this.u.userRole);
          console.log(this.u.status);
            if(this.u.userRole=='ADMIN')
            {
                sessionStorage['login_status'] = '1';
                localStorage.setItem('email',this.userdetails.email);
                localStorage.setItem('flag','true');
                this.router.navigate(['/adminHome']);
            }
            else if(this.u.userRole=='FARMER')
            {
              if(this.u.status=='ACTIVE')
              {
                sessionStorage['login_status'] = '1';
                localStorage.setItem('email',this.userdetails.email);
                localStorage.setItem('flag','true');
              // this.emtService.navBarSwitch(true);
                this.router.navigate(['/farmerHome']);
              }
              else{
                this.message = "You are temporarily BLOCKED..!"
              }
            }else if(this.u.userRole=='WHOLESALER')
            {
              if(this.u.status=='ACTIVE')
              {
                sessionStorage['login_status'] = '1';
                localStorage.setItem('email',this.userdetails.email);
                localStorage.setItem('flag','true');
              // this.emtService.navBarSwitch(true);
                this.router.navigate(['/wholesalerHome']);
              }
              else{
                this.message = "You are temporarily BLOCKED..!"
              }
            }else if(this.u.userRole=='CPF')
            {
              if(this.u.status=='ACTIVE')
              {
                sessionStorage['login_status'] = '1';
                localStorage.setItem('email',this.userdetails.email);
                localStorage.setItem('flag','true');
              // this.emtService.navBarSwitch(true);
                this.router.navigate(['/cpfHome']);
              }
              else{
                this.message = "You are temporarily BLOCKED..!"
              }
            }
        }
        else
        {
          this.message = "UserName/Password Mismatch..!"
        }
    }
  }

}
