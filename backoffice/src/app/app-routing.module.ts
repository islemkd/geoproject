import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from './views/map/map.component';
import { LivreurComponent } from './views/livreur/livreur.component';

const routes: Routes = [
  { path:'map', component:MapComponent },
  { path:'livreur', component:LivreurComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
