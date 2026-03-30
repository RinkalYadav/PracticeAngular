import { Component } from '@angular/core';

@Component({
  selector: 'app-control-flow',
  imports: [],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css'
})
export class ControlFlowComponent {
 display=true;
  togle=false;

show(){
  this.display=true;    
}
hide(){
  this.display=false;    
}


togleDiv(){
  this.togle=!this.togle;
}

color=2;
handleclick(val:number ){
this.color=val;
}
handleinput(event:Event){
  this.color=parseInt((event.target as HTMLInputElement).value);
}


}