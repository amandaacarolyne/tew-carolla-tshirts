import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { TShirtListComponent } from './t-shirt-list/t-shirt-list.component';
import { HomeComponent } from './home/home.component';
import { PurchaseFormComponent } from './purchase-form/purchase-form.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user-registration', component: UserRegistrationComponent },
  { path: 't-shirt-list', component: TShirtListComponent },
  { path: 'purchase-form', component: PurchaseFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
