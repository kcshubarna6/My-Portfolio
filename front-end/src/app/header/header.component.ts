import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private http:HttpClient){}
response!:any;
  name!:any;
  links :any[]=[];
  sideBar!:any;

  getHeaderDetails(){
    let url ="http://localhost:8080/getDetails/projects";
    this.http.get(url).subscribe((res)=>{
      this.response=res;
      this.name=this.response.navbar.brand;
      console.log(this.name)
      for(let x of this.response.navbar.links){
        this.links.push({"name":x.name,"url":x.url})
      }
      console.log(this.links)



    })
  }
  
  ngOnInit(){
    this.getHeaderDetails();
  }
  showSideBar(){
    
    this.sideBar=document.querySelector(".no-side");
    
    this.sideBar.style.display="flex";
    
    
  }
  hideSideBar(){
    this.sideBar=document.querySelector(".no-side");
    
    this.sideBar.style.display="none";

  }
}
