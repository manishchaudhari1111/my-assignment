import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imagesArray = [{showImg:true}, {showImg:false}, {showImg:false}]
  constructor() {
  }
  changeSlide = function(index){
    for (let i = 0; i < this.imagesArray.length; i++) {
      if(i === index){
        this.imagesArray[i].showImg = true;
      }else{
        this.imagesArray[i].showImg = false;
      }
    }
  }
}
