package com.sinfloo.demo.interfaces;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.sinfloo.demo.modelo.Planta;



@Repository
public interface IPlanta extends CrudRepository<Planta, Integer>{

}
