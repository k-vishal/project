import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {
  historyList:any;
  
  constructor(private route:ActivatedRoute,private router:Router,private service:DataService) { 
    // this.historyList=[
    //   {"farmerReqId":10,"cropName":"Wheat", "Qty":100,"perUnitPrice":10,"Date":"23-12-2019","totalAmount":10000},
    //   {"farmerReqId":11,"cropName":"Rice", "Qty":100,"perUnitPrice":10,"Date":"23-12-2019","totalAmount":10000},
    //   {"farmerReqId":12,"cropName":"Maize", "Qty":100,"perUnitPrice":10,"Date":"23-12-2019","totalAmount":10000},
    //   {"farmerReqId":13,"cropName":"Jawar", "Qty":100,"perUnitPrice":10,"Date":"23-12-2019","totalAmount":10000}
    // ]
  

  }
  ngOnInit() {
    this.route.paramMap.subscribe((data)=>{
      let observableResult = this.service.showHistoryList();
      observableResult.subscribe((result)=>{
      console.log(result);
      this.historyList=result;
     
       });
  })
  }
  

}
