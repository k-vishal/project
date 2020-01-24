import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-live-stock-portal',
  templateUrl: './live-stock-portal.component.html',
  styleUrls: ['./live-stock-portal.component.css']
})
export class LiveStockPortalComponent implements OnInit {

 
  allLiveAdvList:any;

  constructor(private route:ActivatedRoute,private router:Router,private service:DataService) { 
  //  this.allLiveAdvList=[
  //     {"farmerReqId":10,"cropName":"Wheat", "QtyToSale":100,"perUnitPrice":10,"status":"Approved"},
  //     {"farmerReqId":11,"cropName":"Rice", "QtyToSale":100,"perUnitPrice":10,"status":"Approved"},
  //     {"farmerReqId":12,"cropName":"Maize", "QtyToSale":100,"perUnitPrice":10,"status":"Approved"},
  //     {"farmerReqId":13,"cropName":"Jawar", "QtyToSale":100,"perUnitPrice":10,"status":"Approved"},
  //   ]
  }
  ngOnInit() {
    this.route.paramMap.subscribe((data)=>{
      let observableResult = this.service.showAllLiveCropList();
      observableResult.subscribe((result)=>{
      console.log(result);
      this.allLiveAdvList=result;
       });
  })
  }
  onBuyNow()
  {
    alert("you have not logged in, Please Log In")
    this.router.navigate(['/login']);
  }
}