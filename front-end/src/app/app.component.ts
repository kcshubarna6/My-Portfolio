import { Component, AfterViewInit } from '@angular/core';

import { Router, NavigationEnd } from '@angular/router';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'front-end';

  constructor(private router: Router,private route: ActivatedRoute) { }
 

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


}
