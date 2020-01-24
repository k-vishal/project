import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-all-closed-adv',
  templateUrl: './all-closed-adv.component.html',
  styleUrls: ['./all-closed-adv.component.css']
})
export class AllClosedAdvComponent implements OnInit {
  allClosedAdvList:any;
  constructor(private route:ActivatedRoute,private router:Router,private service:DataService) { 
    // this.allClosedAdvList=[
    //   {"farmerReqId":10,"cropName":"Wheat", "QtyToSale":100,"perUnitPrice":10,"status":"Closed"},
    //   {"farmerReqId":11,"cropName":"Rice", "QtyToSale":100,"perUnitPrice":10,"status":"Closed"},
    //   {"farmerReqId":12,"cropName":"Maize", "QtyToSale":100,"perUnitPrice":10,"status":"Closed"},
    //   {"farmerReqId":13,"cropName":"Jawar", "QtyToSale":100,"perUnitPrice":10,"status":"Closed"}
    // ]
  }

  ngOnInit() {
      this.route.paramMap.subscribe((data)=>{
      let observableResult = this.service.showAllClosedCropList();
      observableResult.subscribe((result)=>{
      console.log(result);
      this.allClosedAdvList=result;
       });
  })
  }

}
