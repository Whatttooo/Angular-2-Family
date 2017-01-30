import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Person } from './Person';
import 'rxjs/add/operator/map';
import {PERSONS} from './mock-family';

@Injectable()
export class PersonService {
  constructor(private http: Http) {
  }

  getPeople(): Promise<Person[]>{
    return Promise.resolve(PERSONS);
  }
  getPerson(id:number):Promise<Person>{
    return this.getPeople()
      .then(people => people.find(person => person.id ===id ));
  }

}
