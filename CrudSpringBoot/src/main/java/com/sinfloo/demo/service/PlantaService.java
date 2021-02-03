package com.sinfloo.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sinfloo.demo.interfaceService.IPlantaService;
import com.sinfloo.demo.interfaces.IPlanta;
import com.sinfloo.demo.modelo.Planta;

@Service
public class PlantaService implements IPlantaService{

	@Autowired
	private IPlanta data;
	
	@Override
	public List<Planta> listar() {
		return (List<Planta>) data.findAll();
	}

	@Override
	public Optional<Planta> listarId(int id) {
		return data.findById(id);
	}

	
	@Override
	public int save(Planta p) {
		int res = 0;
		Planta planta = data.save(p);
		if(!planta.equals(null)) {
			res = 1;
		}
		return res;
	}

	@Override
	public void delete(int id) {
		data.deleteById(id);
	}
	
}
