package com.sinfloo.demo.controlador;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import com.sinfloo.demo.interfaceService.IPlantaService;
import com.sinfloo.demo.modelo.*;

@Controller
@RequestMapping
public class Controlador {

	@Autowired
	private IPlantaService service;
	
	@GetMapping("/listar")
	public String listar(Model model) {
		List<Planta>planta = service.listar();
		model.addAttribute("plantas", planta);
		return "index";
	}
	
	@GetMapping("/new")
	public String agregar(Model model) {
		model.addAttribute("planta", new Planta());
		return "form";
	}
	
	@PostMapping("/save")
	public String save(@Validated Planta p, Model model) {
		service.save(p);
		return "redirect:/listar";
	}
	
	@GetMapping("/editar/{id}")
	public String editar(@PathVariable int id, Model model) {
		Optional<Planta>planta = service.listarId(id);
		model.addAttribute("planta", planta);
		return "form";
	}
	
	@GetMapping("/eliminar/{id}")
	public String delete(Model model, @PathVariable int id) {
		service.delete(id);
		return "redirect:/listar";
	}
	
	@GetMapping("/eliminarSeleccionados/{id}")
	public void deleteSelection(Model model, @PathVariable int id) {
		service.delete(id);
	}
	
	@GetMapping("/actualizar")
	public String actualizar() {
		return "redirect:/listar";
	}
}
