import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  village="Barmohani"
  hello(){
    alert("function is working");
    this.hii();
    var name:any ="RInkal Yadavv";

    
  }
  hii(){
      alert("hii function is working");
    }
    sum(a:number,b:any){
      alert(a+"ram");
    }
    
  
}
