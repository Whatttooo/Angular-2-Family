import { Component } from '@angular/core';
import { Person } from './Person';
import { PersonService } from './Person.service';

@Component({
  selector:"my-dashboard",
  templateUrl: "./Dashboard.component.html",
  styleUrls:['./Dashboard.component.css']
})

export class DashboardComponent{

  people: Person[];

  constructor(private personService: PersonService){}

  ngOnInit(): void{
    this.personService.getPeople()
      .then(people => this.people = people.slice(0,4));
  }
}
