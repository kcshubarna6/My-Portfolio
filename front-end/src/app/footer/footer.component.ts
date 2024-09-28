import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor (private http:HttpClient){}
  response!:any;
  rightsText !:any;
  socialLinks : any[]=[];
  technology!:any;

  getFooterDetails(){
    let url= "assets/data/projects.json"

    this.http.get(url).subscribe((res)=>{
      this.response=res;
      this.rightsText=this.response.footer.text;
      for (let x of this.response.footer.socialLinks){
        this.socialLinks.push({"platform":x.platform,"name":x.name, "url":x.url})
      }
      this.technology=this.response.technology;
      console.log(this.socialLinks)

      
      


    })
  }

  ngOnInit(){
    this.getFooterDetails();
  }

}
