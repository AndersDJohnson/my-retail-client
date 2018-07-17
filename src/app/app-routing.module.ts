import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from "./product/product.component";

const routes: Routes = [
  { path: 'product/:id', component: ProductComponent },
  { path: '**', redirectTo: 'product/13860428'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
