import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-crop-management',
  templateUrl: './crop-management.component.html',
  styleUrls: ['./crop-management.component.css']
})
export class CropManagementComponent implements OnInit {
  
  cropList:any;
  crop:any;
  constructor(private route:ActivatedRoute,private router:Router,private service:DataService) { 
    // this.cropList=[
    //   {"cropId":1,"cropName":"Wheat"},
    //   {"cropId":2,"cropName":"Rice"},
    //   {"cropId":3,"cropName":"Maize"},
    //   {"cropId":4,"cropName":"Jawar"}
    // ]
    this.crop={
      cropName:"" 
    }
    

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
  OnAdd()
  {
    console.log(this.crop);
    this.route.paramMap.subscribe((data)=>{
      let observableResult = this.service.AddCrop(this.crop);
      observableResult.subscribe((result)=>{
      console.log(result);
      alert("New Crop added successfully");
      this.crop.cropName="";
      this.ngOnInit() 
    });
  })
  }
  onDelete(selectedItem: any)
  {
    console.log(selectedItem.cropId);
    this.route.paramMap.subscribe((data)=>{
      let observableResult = this.service.deleteCrop(selectedItem);
      observableResult.subscribe((result)=>{
      console.log(result);
      alert("crop "+selectedItem.cropName+" deleted");
      this.ngOnInit() 
    });
  })
  }

}
