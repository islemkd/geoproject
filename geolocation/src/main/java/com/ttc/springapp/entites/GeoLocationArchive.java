package com.ttc.springapp.entites;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table( name="geolocation_archive" )
public class GeoLocationArchive {
 /*
  * `latitude` double DEFAULT NULL,
  `longitude` double DEFAULT NULL,
  * */
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	private double latitude;
	private double longitude;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public double getLatitude() {
		return latitude;
	}
	public void setLatitude(double latitude) {
		this.latitude = latitude;
	}
	public double getLongitude() {
		return longitude;
	}
	public void setLongitude(double longitude) {
		this.longitude = longitude;
	}
	public GeoLocationArchive() {
		super();
	}
	
	
	
	
	
}
