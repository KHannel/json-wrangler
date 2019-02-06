import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  rules = [];

  json = {
    firstName: 'Test',
    lastName: 'User',

    privateInfo: {
      dateOfBirth: '01/12/1976',
      emailAddress: 'testuser@example.com',
      phoneNumber: '123-456-7890'
    },

    hobbies: [
      'Baseball',
      'Basketball',
      'Football',
      'Soccer'
    ],

    relatives: [
      {
        firstName: 'Bob',
        lastName: 'User',
        relationship: 'Father'
      },
      {
        firstName: 'Barbara',
        lastName: 'User',
        relationship: 'Mother'
      }
    ]
  };
}
