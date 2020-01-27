import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-new-adv',
  templateUrl: './new-adv.component.html',
  styleUrls: ['./new-adv.component.css']
})
export class NewAdvComponent implements OnInit {
  u:any;
  userDetails:any;
  crop:any;
  name:any;
  userFile:any=File;
  cropList:any;
  cropName:any;
  cropImage:any;
  constructor(private route:ActivatedRoute,private router:Router,private service:DataService)
 { 
    // this.cropList=[
    //   {'cropId':1, 'cropName':'Wheat'},
    //   {'cropId':2, 'cropName':'Rice'},
    //   {'cropId':3, 'cropName':'Maize'},
    //   {'cropId':4, 'cropName':'Jawar'}
    // ]
    this.name="Rice";
  //  alert(JSON.parse(window.sessionStorage.getItem("user")).userId);
    this.u = JSON.parse(window.sessionStorage.getItem("user"));
    console.log(this.u);
  }
  newReq={
    cropName:"",
    qtyToSale:"",
    perUnitPrice:"",
    advStatus:"PENDING",
    cropImage:""
   
  }

  ngOnInit() {
    this.route.paramMap.subscribe((data)=>{
      let observableResult = this.service.showCrop();
      observableResult.subscribe((result)=>{
      console.log(result);
      this.cropList=result;
       });
  })
  }
  selected(){
    console.log(this.cropName)
    this.name=this.cropName;
  }
  onSelectFile(event)
  {
    const file=event.target.files[0];
    console.log(file);
    this.userFile=file;
    console.log(this.userFile);
  }
  onCancel()
  {
    this.router.navigate(["/farmerHome"]);
  }
  onSubmit()
  {
    this.newReq.cropName=this.name;
    console.log(this.newReq.cropName);
    console.log(this.cropName);
    this.newReq.advStatus="PENDING";
  console.log(this.newReq.advStatus);
  console.log(this.newReq);
  const formData =new FormData();
  formData.append("user", JSON.stringify(this.newReq));
  formData.append("file", this.userFile);
  console.log(formData);
  this.route.paramMap.subscribe((data)=>{
    let observableResult = this.service.AddNewAdv(formData);
    observableResult.subscribe((result)=>{
    console.log(result);
    alert("New Crop Advertisement added successfully");
    this.router.navigate(['/farmerHome']);
    
  });
})
 
}

}



// onSelectFile(event)
// {
//   const file=event.target.files[0];
//   console.log(file);
//   this.userFile=file;
// }
// onCancel()
// {
//   this.router.navigate(["/farmerHome"]);
// }
// onSubmit()
// {
//   this.newReq.cropName=this.name;
//   console.log(this.newReq.cropName);
//   console.log(this.cropName);
//   this.newReq.advStatus="PENDING";
// console.log(this.newReq.advStatus);
// console.log(this.newReq);

// const formData=new FormData();
// formData.append("file",this.userFile);

// formData.append("user",JSON.stringify(this.newReq));
// formData.append("file",this.userFile);
// console.log(this.userFile);
// console.log(formData);
// this.route.paramMap.subscribe((data)=>{
//   //let observableResult = this.service.AddNewAdv(this.newReq);
//   let observableResult = this.service.AddNewAdv(formData);
//   observableResult.subscribe((result)=>{
//   console.log(result);
//   alert("New Crop Advertisement added successfully");
//   this.router.navigate(['/farmerHome']);
  
// });
// })

// }
