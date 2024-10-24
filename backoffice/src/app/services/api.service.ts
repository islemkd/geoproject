import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiEndpoint="http://localhost:8018"
  constructor(private http:HttpClient) { }


  getMarkersFromServer(){
    return this.http.get(this.apiEndpoint+'/api/geo/list')
  }


  saveGeoLocationToServer(latitude:any,longitude:any){
    return this.http.post(this.apiEndpoint+'/api/geo/add',{ latitude,longitude })
  }
}
