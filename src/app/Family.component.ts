import {Component, Input, OnInit} from '@angular/core';
import {Person } from './Person';

import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { PersonService } from './Person.service';

@Component({
  moduleId: module.id,
  selector: "family-detail",
  templateUrl: './Family.component.html',
  styleUrls:['./Family.component.css']
})

export class FamilyComponent implements OnInit{
  @Input()
  person: Person;

  constructor(
    private personService: PersonService,
    private route: ActivatedRoute,
    private location: Location
  ){}

  ngOnInit(): void{
      this.route.params
        .switchMap((params: Params)=> this.personService.getPerson(+params['id']))
        .subscribe(person => this.person = person);
  }

  goBack(): void{
      this.location.back();
  }
}
