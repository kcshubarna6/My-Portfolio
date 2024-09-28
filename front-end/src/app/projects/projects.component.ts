import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';





@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent  {
  wholeResponse!:any;
  projects: any[] = [];

  constructor( private http:HttpClient) { }

  fetchProjectDetails(){
    let url="assets/data/projects.json"
    this.http.get(url).subscribe((res)=>{
      console.log(res)
      this.wholeResponse=res;
     for(let x of this.wholeResponse.projects){
      
      this.projects.push({"projectId":x.projectId,"title":x.title,"description":x.description,"style":x.style})
      console.log(this.projects)
     }
    })
  }
  ngOnInit(){
    this.fetchProjectDetails();
  }

 

}
