import {Component, OnInit} from '@angular/core';
import {Person} from './Person';
import {PersonService} from './Person.service';
import {Router} from "@angular/router";



@Component({
  moduleId: module.id,
  selector: 'my-family',
  templateUrl: './Person.component.html',
  styleUrls: ['./app.component.css']
})

export class PersonComponent implements OnInit{
  people: Person[];

  constructor(
    private router: Router,
    private personService: PersonService
    ){}

  getPeople(): void{
    this.personService.getPeople().then(people => this.people = people);
  }

  ngOnInit(){
    this.getPeople();
  }
  selectedFamily: Person;

  onSelect(person: Person): void{
    this.selectedFamily = person;
  }

  goToDetail():void{
    this.router.navigate(['/detail', this.selectedFamily.id]);
  }

}
