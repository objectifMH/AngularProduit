import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProduitsComponent } from './produits/produits.component';
import { NouveauProduitsComponent } from './nouveau-produits/nouveau-produits.component';


const routes: Routes = [
{
    path : "" , redirectTo : "/produits", pathMatch: "full"
},
{
    path : "produits" , component : ProduitsComponent
},
{
    path : "nouveau-produits" , component : NouveauProduitsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
