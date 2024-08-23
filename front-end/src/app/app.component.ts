import { Component, AfterViewInit,OnInit } from '@angular/core';

import { Router, NavigationEnd } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit{
  title = 'front-end';

  constructor(private router: Router) { }
 

  ngAfterViewInit(): void {
    this.router.events.subscribe(event => {
    
      
      if (event instanceof NavigationEnd) {
        if (event.url === '/') { 
          window.history.scrollRestoration = 'auto';
          window.scrollTo(0, 0); 
        }
        else if (event.url === '/contact-about'){
          this.scrollToFooter();


        }
        else if (event.url === '/technology'){
          this.scrollToFooter();
          
        }
        else if (event.url === '/about-me'){
          setTimeout(() => {
            this.scrollToHeader();
          }, 100); 
        }
        else {
          this.scrollToProjects();
          
        }
      }
      
    });
  }

  scrollToProjects(): void {

    const projectsElement = document.getElementById('projects');
    

    if (projectsElement) {

      projectsElement.scrollIntoView({ behavior: 'smooth' });

    }

  }
  
  scrollToFooter(): void {

    const footerElement = document.getElementById('footer');
    console.log(footerElement)
    

    if (footerElement) {

      footerElement.scrollIntoView({ behavior: 'smooth' });

    }

  }
  scrollToHeader(): void {

    const aboutElement = document.getElementById('header');
    console.log(aboutElement)
    

    if (aboutElement) {

      aboutElement.scrollIntoView({ behavior: 'smooth' });

    }

  }


  showIntroAndProjects: boolean = true;

  
  showRouted: boolean = true;

 
  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        
        this.showIntroAndProjects =  event.url === '/' || event.url === "/projects" || event.url === "/contact-about" || event.url ==="/technology";
        this.showRouted=event.url==='/about-me';
      }
      
    });
  }

 
}


