import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-closed-adv',
  templateUrl: './closed-adv.component.html',
  styleUrls: ['./closed-adv.component.css']
})
export class ClosedAdvComponent implements OnInit {
  closedAdvList:any;
  constructor(private route:ActivatedRoute,private router:Router,private service:DataService) { 
    // this.closedAdvList=[
    //   {"farmerReqId":10,"cropName":"Wheat", "QtyToSale":100,"perUnitPrice":10,"status":"Closed"},
    //   {"farmerReqId":11,"cropName":"Rice", "QtyToSale":100,"perUnitPrice":10,"status":"Closed"},
    //   {"farmerReqId":12,"cropName":"Maize", "QtyToSale":100,"perUnitPrice":10,"status":"Closed"},
    //   {"farmerReqId":13,"cropName":"Jawar", "QtyToSale":100,"perUnitPrice":10,"status":"Closed"}
    // ]
  }
  ngOnInit() {
    this.route.paramMap.subscribe((data)=>{
      let observableResult = this.service.showClosedCropList();
      observableResult.subscribe((result)=>{
      console.log(result);
      this.closedAdvList=result;
       });
  })
  }

}
