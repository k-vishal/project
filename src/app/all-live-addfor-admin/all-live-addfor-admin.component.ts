import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-all-live-addfor-admin',
  templateUrl: './all-live-addfor-admin.component.html',
  styleUrls: ['./all-live-addfor-admin.component.css']
})
export class AllLiveAddforAdminComponent implements OnInit {
  allLiveAdvList:any;

  constructor(private route:ActivatedRoute,private router:Router,private service:DataService) { 
    // this.allLiveAdvList=[
    //   {"farmerReqId":10,"cropName":"Wheat", "QtyToSale":100,"perUnitPrice":10,"status":"Approved"},
    //   {"farmerReqId":11,"cropName":"Rice", "QtyToSale":100,"perUnitPrice":10,"status":"Approved"},
    //   {"farmerReqId":12,"cropName":"Maize", "QtyToSale":100,"perUnitPrice":10,"status":"Approved"},
    //   {"farmerReqId":13,"cropName":"Jawar", "QtyToSale":100,"perUnitPrice":10,"status":"Approved"},
    // ]
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

  onDelete(advlist)
  {
    console.log(advlist);
    advlist.advStatus="CANCELLED";
    console.log(advlist.advStatus);
    this.route.paramMap.subscribe((data)=>{
      let observableResult = this.service.deletePending(advlist);
      observableResult.subscribe((result)=>{
      console.log(result);
      alert("Advertisement no "+advlist.farmerAdvId+" deleted");
      this.ngOnInit() 
    });
  })
}
}
