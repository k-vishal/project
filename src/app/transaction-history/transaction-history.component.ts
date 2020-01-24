import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css']
})
export class TransactionHistoryComponent implements OnInit {
  historyList:any;
  constructor(private route:ActivatedRoute,private router:Router,private service:DataService) { 
    // this.historyList=[
    //   {"farmerReqId":10,"WholesalerId":51, "cropName":"Wheat", "Qty":100,"perUnitPrice":10,"Date":"23-12-2019","totalAmount":10000},
    //   {"farmerReqId":11,"WholesalerId":52, "cropName":"Rice", "Qty":100,"perUnitPrice":10,"Date":"23-12-2019","totalAmount":10000},
    //   {"farmerReqId":12,"WholesalerId":51, "cropName":"Maize", "Qty":100,"perUnitPrice":10,"Date":"23-12-2019","totalAmount":10000},
    //   {"farmerReqId":13,"WholesalerId":50,"cropName":"Jawar", "Qty":100,"perUnitPrice":10,"Date":"23-12-2019","totalAmount":10000}
    // ]
  }
  ngOnInit() {
    this.route.paramMap.subscribe((data)=>{
      let observableResult = this.service.showAllHistoryList();
      observableResult.subscribe((result)=>{
      console.log(result);
      this.historyList=result;
     
       });
  })
  }

}
