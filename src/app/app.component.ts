import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isDispalyText = true;
  logArray = [];
  toggleDisplay = function() {
    this.isDispalyText = !this.isDispalyText;
    this.logArray.push(this.logArray.length + 1);
  }
}
