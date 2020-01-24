import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgModel,NgForm,FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { FaqComponent } from './faq/faq.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FarmerPortalComponent } from './farmer-portal/farmer-portal.component';
import { WholesalerPortalComponent } from './wholesaler-portal/wholesaler-portal.component';
import { LiveStockPortalComponent } from './live-stock-portal/live-stock-portal.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { FarmerHomeComponent } from './farmer-home/farmer-home.component';
import { WholesalerHomeComponent } from './wholesaler-home/wholesaler-home.component';
import { NewAdvComponent } from './new-adv/new-adv.component';
import { PendingAdvComponent } from './pending-adv/pending-adv.component';
import { LiveAdvComponent } from './live-adv/live-adv.component';
import { ClosedAdvComponent } from './closed-adv/closed-adv.component';
import { FarmerProfileComponent } from './farmer-profile/farmer-profile.component';
import { AllLiveAdvComponent } from './all-live-adv/all-live-adv.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { WholesalerProfileComponent } from './wholesaler-profile/wholesaler-profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { BuyNowComponent } from './buy-now/buy-now.component';
import { AllPendingAdvComponent } from './all-pending-adv/all-pending-adv.component';
import { AllClosedAdvComponent } from './all-closed-adv/all-closed-adv.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { CropManagementComponent } from './crop-management/crop-management.component';
import { ControlManagementComponent } from './control-management/control-management.component';
import { AllLiveAddforAdminComponent } from './all-live-addfor-admin/all-live-addfor-admin.component';
import { RejectedAdvComponent } from './rejected-adv/rejected-adv.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { CpfHomeComponent } from './cpf-home/cpf-home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    FaqComponent,
    AboutUsComponent,
    FarmerPortalComponent,
    WholesalerPortalComponent,
    LiveStockPortalComponent,
    AdminHomeComponent,
    FarmerHomeComponent,
    WholesalerHomeComponent,
    NewAdvComponent,
    PendingAdvComponent,
    LiveAdvComponent,
    ClosedAdvComponent,
    FarmerProfileComponent,
    AllLiveAdvComponent,
    OrderHistoryComponent,
    WholesalerProfileComponent,
    ChangePasswordComponent,
    BuyNowComponent,
    AllPendingAdvComponent,
   
    AllClosedAdvComponent,
    TransactionHistoryComponent,
    CropManagementComponent,
    ControlManagementComponent,
    AllLiveAddforAdminComponent,
    RejectedAdvComponent,
    EditProfileComponent,
    CpfHomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule, 
    RouterModule.forRoot([
      {path:"",component:HomeComponent},
      {path:"home",component:HomeComponent},
      {path:"login", component:LoginComponent},
      {path:"aboutUs", component:AboutUsComponent},
      {path:"faq",component:FaqComponent},
      {path:"register", component:RegisterComponent},
      {path:"farmerPortal", component:FarmerPortalComponent},
      {path:"wholesalerPortal", component:WholesalerPortalComponent},
      {path:"liveStockPortal", component:LiveStockPortalComponent},
      {path:"adminHome", component:AdminHomeComponent},
      {path:"farmerHome", component:FarmerHomeComponent},
      {path:"wholesalerHome", component:WholesalerHomeComponent},
      {path:"newAdv", component:NewAdvComponent},
      {path:"pendingAdv", component:PendingAdvComponent},
      {path:"liveAdv", component:LiveAdvComponent},
      {path:"closedAdv",component:ClosedAdvComponent},
      {path:"farmerProfile",component:FarmerProfileComponent},
      {path:"allLiveAdv",component:AllLiveAdvComponent},
      {path:"orderHistory",component:OrderHistoryComponent},
      {path:"wholesalerProfile",component:WholesalerProfileComponent},
      {path:"changePassword",component:ChangePasswordComponent},
      {path:"buyNow",component:BuyNowComponent},
      {path:"allPendingAdv",component:AllPendingAdvComponent},
      {path:"allLiveAddforAdmin",component:AllLiveAddforAdminComponent},
      {path:"allClosedAdv",component:AllClosedAdvComponent},
      {path:"transactionHistory",component:TransactionHistoryComponent},
      {path:"cropManagement",component:CropManagementComponent},
      {path:"controlManagement",component:ControlManagementComponent},
      {path:"editProfile",component:EditProfileComponent},
      {path:"cpfHome",component:CpfHomeComponent}

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

