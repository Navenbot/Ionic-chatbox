import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  value: any[];
  Value: any[];
  messages = [
    {
      user: 'Nav',
      createdAt: 1554090856000,
      msg: 'Hello Bhai'
    },
    {
      user: 'Ram',
      createdAt: 1554090956000,
      msg: 'Vanakam'
    },
    {
      user: 'Nav',
      createdAt: 1554090976000,
      msg: 'Namaste '
    }
  ];

  currentUser = 'Nav';
  newMsg = "";
  
  constructor() {
    
  }

  sendMessage() {
this.messages.push({
  user: 'Nav',
  createdAt: new Date().getTime(),
  msg: this.newMsg
});
this.newMsg = '';
  }

 
}
