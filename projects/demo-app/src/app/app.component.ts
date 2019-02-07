import { Component } from '@angular/core';
import { FirstNameComponent } from './components/first-name/first-name.component';
import { RelativesComponent } from './components/relatives/relatives.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  rules = [
    {
      path: 'firstName',
      component: FirstNameComponent
    },
    {
      path: 'relatives',
      component: RelativesComponent
    }
  ];

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
