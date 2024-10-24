package com.ttc.springapp.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ttc.springapp.dto.GeoModel;
import com.ttc.springapp.entites.GeoLocationArchive;
import com.ttc.springapp.repositories.GeoRepo;

@RestController
@RequestMapping("/api/geo")
@CrossOrigin( origins="*" )
public class GeoController {

	@Autowired
	private GeoRepo repo;
	
	@GetMapping("/list")
	private ResponseEntity<?> getList(){
		return ResponseEntity.ok(repo.findAll());
	}
	@PostMapping("/add")
	private ResponseEntity<?> add( @RequestBody GeoModel model ){
		
		 
		GeoLocationArchive e = new GeoLocationArchive();
		e.setLatitude(model.getLatitude());
		e.setLongitude(model.getLongitude());
		
		
		return ResponseEntity.ok(repo.save(e));
	}
	
	
}
