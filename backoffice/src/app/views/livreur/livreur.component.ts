import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-livreur',
  templateUrl: './livreur.component.html',
  styleUrls: ['./livreur.component.css']
})
export class LivreurComponent {

  constructor(private api:ApiService) { }

  startTracking(){
    // call navigator geolocation
    navigator.geolocation.watchPosition((gelocation)=>{
      console.log(gelocation.coords);
      this.api.saveGeoLocationToServer( gelocation.coords.latitude,gelocation.coords.longitude ).toPromise().then((res:any)=>{
        console.log(res);
        
      })
    },(err)=>{
      console.log(err);
      
    })
  }
}
