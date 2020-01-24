import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http:HttpClient) { }
  Login(user):Observable<any>
  {
    return this.http.post("http://localhost:8080/agriculture/user/login",user);
  }
  Register(user)
  {
    return this.http.post("http://localhost:8080/agriculture/user/register",user);
  }
  // AddNewAdv(formdata:FormData):Observable<any>
  // {
  //   return this.http.post("http://localhost:8080/agriculture/user/addNewAdv/"+(JSON.parse(window.sessionStorage.getItem("user")).userId),formdata);
  // }
  AddNewAdv(user)
  {
    return this.http.post("http://localhost:8080/agriculture/user/addNewAdv/"+(JSON.parse(window.sessionStorage.getItem("user")).userId),user);
  }

  AddCrop(user)
  {
    return this.http.post("http://localhost:8080/agriculture/user/addCrop",user);
  }
  showCrop()
  {
    return this.http.get("http://localhost:8080/agriculture/user/showCrop");
  }
  deleteCrop(crop)
  {
    return this.http.post("http://localhost:8080/agriculture/user/deleteCrop",crop);
  }
  showPendingCropList()
  {
    return this.http.get("http://localhost:8080/agriculture/user/showPendingCropList/"+(JSON.parse(window.sessionStorage.getItem("user")).userId));
  }
  deletePending(FarmerAdv)
  {
    return this.http.post("http://localhost:8080/agriculture/user/deletePending",FarmerAdv);
  }
  showLiveCropList()
  {
    return this.http.get("http://localhost:8080/agriculture/user/showLiveCropList/"+(JSON.parse(window.sessionStorage.getItem("user")).userId));
  }
  showClosedCropList()
  {
    return this.http.get("http://localhost:8080/agriculture/user/showClosedCropList/"+(JSON.parse(window.sessionStorage.getItem("user")).userId));
  }
  showAllPendingCropList()
  {
    return this.http.get("http://localhost:8080/agriculture/user/showAllPendingCropList");
  }
  approvePending(approved)
  {
    return this.http.post("http://localhost:8080/agriculture/user/approvePending",approved);
  }
  showAllLiveCropList()
  {
    return this.http.get("http://localhost:8080/agriculture/user/showAllLiveCropList");
  }
  showAllClosedCropList()
  {
    return this.http.get("http://localhost:8080/agriculture/user/showAllClosedCropList");
  }
  addNewOrder(wholeslr)
  {
    return this.http.post("http://localhost:8080/agriculture/user/AddNewOrder/"+(JSON.parse(window.sessionStorage.getItem("user")).userId),wholeslr);
  }
  showHistoryList()
  {
    return this.http.get("http://localhost:8080/agriculture/user/showHistoryList/"+(JSON.parse(window.sessionStorage.getItem("user")).userId));
  }
  showAllHistoryList()
  {
    return this.http.get("http://localhost:8080/agriculture/user/showAllHistoryList");
  }
  profile()
  {
    return this.http.get("http://localhost:8080/agriculture/user/profile/"+(JSON.parse(window.sessionStorage.getItem("user")).userId));
  }
  updateProfile(user)
  {
    return this.http.post("http://localhost:8080/agriculture/user/updateProfile",user);
  }
  userList()
  {
    return this.http.get("http://localhost:8080/agriculture/user/userList");
  }
  changeUserStatus(user)
  {
    return this.http.post("http://localhost:8080/agriculture/user/changeUserStatus",user);
  }
}
