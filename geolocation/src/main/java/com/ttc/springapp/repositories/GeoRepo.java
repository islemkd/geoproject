package com.ttc.springapp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ttc.springapp.entites.GeoLocationArchive;

public interface GeoRepo extends JpaRepository<GeoLocationArchive,Long>{

}
