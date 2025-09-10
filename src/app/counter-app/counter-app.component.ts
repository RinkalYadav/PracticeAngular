import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-app',
  imports: [],
  templateUrl: './counter-app.component.html',
  styleUrl: './counter-app.component.css'
})
export class CounterAppComponent {
count=0;
// handleIncreament(){
//   this.count=this.count+1;
// }
// handleDecreament(){
//   this.count=this.count-1;
// }
// handleReset(){
//   this.count=0;
// }

handleCounter(value:string){
if(value=='plus'){
  this.count=this.count+1;
}
else if(value=='minus'){
  if(this.count>0){
    this.count=this.count-1;
  }
  else{
    this.count=0;
  }
}
else{
  this.count=0;
}
}
}
