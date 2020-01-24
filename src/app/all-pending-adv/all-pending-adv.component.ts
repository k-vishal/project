import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-all-pending-adv',
  templateUrl: './all-pending-adv.component.html',
  styleUrls: ['./all-pending-adv.component.css']
})
export class AllPendingAdvComponent implements OnInit {

  allPendingAdvList:any;
  constructor(private route:ActivatedRoute,private router:Router,private service:DataService) { 
    // this.pendingAdvList=[
    //   {"farmerReqId":10,"cropName":"Wheat", "QtyToSale":100,"perUnitPrice":10,"status":"pending"},
    //   {"farmerReqId":11,"cropName":"Rice", "QtyToSale":100,"perUnitPrice":10,"status":"pending"},
    //   {"farmerReqId":12,"cropName":"Maize", "QtyToSale":100,"perUnitPrice":10,"status":"pending"},
    //   {"farmerReqId":13,"cropName":"Jawar", "QtyToSale":100,"perUnitPrice":10,"status":"pending"},
    // ]
  }


  ngOnInit() {
    this.route.paramMap.subscribe((data)=>{
      let observableResult = this.service.showAllPendingCropList();
      observableResult.subscribe((result)=>{
      console.log(result);
      this.allPendingAdvList=result;
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
  onApprove(advlist)
  {
    console.log(advlist);
    advlist.advStatus="APPROVED";
    console.log(advlist.advStatus);
    this.route.paramMap.subscribe((data)=>{
      let observableResult = this.service.approvePending(advlist);
      observableResult.subscribe((result)=>{
      console.log(result);
      alert("Advertisement no "+advlist.farmerAdvId+" approved");
      this.ngOnInit() 
    });
  })
    }

}
