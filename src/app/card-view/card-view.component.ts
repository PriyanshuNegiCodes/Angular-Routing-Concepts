import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent {

  //whenever the card is clicked the card view will be informed that the card is subscribed
  num:any;
constructor(private ar:ActivatedRoute){} // helps to read the url parameters
   // this class will help to read the parameters that are passed in the url 

ngOnInit(){
  this.ar.paramMap.subscribe((p:ParamMap)=>{
    this.num = p.get('url');
  })
}
}
