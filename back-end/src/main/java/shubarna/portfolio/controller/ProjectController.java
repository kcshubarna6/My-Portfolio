package shubarna.portfolio.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ResourceLoader;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.core.io.Resource;

@RestController
@RequestMapping("/getDetails")

public class ProjectController {
	
	@Autowired

	  private ResourceLoader resourceLoader;
	
	
	@CrossOrigin(origins = "http://localhost:4200") 
	@GetMapping("/projects")
	public String getProjects() throws IOException {
		
	    Resource resource = resourceLoader.getResource("classpath:projects.json");


	      return new String(resource.getInputStream().readAllBytes());
	
	};

	}
		
	
	

