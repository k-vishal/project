import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-buy-now',
  templateUrl: './buy-now.component.html',
  styleUrls: ['./buy-now.component.css']
})
export class BuyNowComponent implements OnInit {

  productToBuy;
  total;
  QtyToBuy:any;
  orderQty:any;
  perUnitPrice:any;
  cropName:any;
  farmerAdvId:any;
  date:any;
  constructor(private route:ActivatedRoute,private router:Router,private service:DataService) {
  }
  wholesaler={
    orderQty:"",
  perUnitPrice:"",
  cropName:"",
  farmerAdvId:"",
  date:Date.now(),
  shippingAddress: {
    houseNo: "",
    area: "",
    city: "",
    district: "",
    state: "",
    country: "",
    pincode: ""
}
  }

  ngOnInit() {
    this.productToBuy = JSON.parse(window.sessionStorage.getItem("cartlist"));
    console.log(this.productToBuy);
    this.wholesaler.cropName=this.productToBuy.cropName;
    this.wholesaler.perUnitPrice=this.productToBuy.perUnitPrice;
    this.wholesaler.farmerAdvId=this.productToBuy.farmerAdvId;
  }
  cal(QtyToBuy)
  {
    console.log(QtyToBuy);
    this.total=QtyToBuy * this.productToBuy.perUnitPrice;
    console.log(this.total);
  }
  checkOut()
  {
    
    this.wholesaler.orderQty=this.QtyToBuy;
    console.log(this.wholesaler.orderQty);
    console.log(this.wholesaler);
    this.route.paramMap.subscribe((data)=>{
      let observableResult = this.service.addNewOrder(this.wholesaler);
      observableResult.subscribe((result)=>{
      console.log(result);
      alert("Thank You, Your Order Placed Successfully");
      this.router.navigate(['/wholesalerHome']);
      })
    })
  }


}
