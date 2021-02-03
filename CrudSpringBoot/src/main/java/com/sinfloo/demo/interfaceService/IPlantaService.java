package com.sinfloo.demo.interfaceService;

import java.util.List;
import java.util.Optional;
import com.sinfloo.demo.modelo.Planta;

public interface IPlantaService {

	public List<Planta>listar();
	public Optional<Planta>listarId(int id);
	public int save(Planta p);
	public void delete(int id);
}
