import { AfterViewInit, Component } from '@angular/core';
import * as leaflet from "leaflet";
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
 
  private map:any;

  defaultIcon = leaflet.icon({
    iconUrl: 'https://www.cp-desk.com/wp-content/uploads/2019/02/map-marker-free-download-png-300x300.png',
    iconSize: [30, 30], // size of the icon
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});

  lingeDATA:any[] = [];


  initMap(): void {
     
    
    this.map = leaflet.map('map', {
      center: [ 30,10],
      zoom: 3
    });


    const tiles = leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);

 

   this.getDATA();

  }
  constructor(private api:ApiService){ 
    
  }


  getDATA(){
    this.api.getMarkersFromServer().toPromise().then((res:any)=>{
      console.log(res);

      res.map((m:any)=>{
        this.lingeDATA.push([m.latitude,m.longitude]);
        leaflet.marker([m.latitude,m.longitude]).setIcon(this.defaultIcon).addTo(this.map);
      })



      
var polyline = leaflet.polyline(this.lingeDATA, {color: 'blue'}).addTo(this.map);

  // Optionally, zoom the map to fit the line
  this.map.fitBounds(polyline.getBounds());
        
    })
  }
  ngAfterViewInit(): void {
   this.initMap();

   setTimeout(() => {
    this.animate();
   }, 5000);
  }


  animate(){
    // this.map.setView([51.505, -0.09], 13);
     
    this.lingeDATA.map( async (position:any)=>{
      this.map.panTo( position );
      await new Promise((res,reject)=>{
        setTimeout(()=>{
          res(true);
        },2000)
      })
     
    })

  }
}
