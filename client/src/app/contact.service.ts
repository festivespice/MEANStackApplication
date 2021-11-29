import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http'; //from '@angular/http' with just headers and http
import {Contact} from './contact';
//needed
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

import {map} from 'rxjs/operators'; //from import rxjs/add/operator/map

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private httpClient: HttpClient) { }

  //retrieving ContractService
  getContacts()
  {
    return this.httpClient.get<Contact[]>('http://localhost:3000/api/contacts');
    //.pipe(map(res => res.json));
    //we use an array because we're getting an array back
  }

  //add contact method
  addContact(newContact: any): Observable<any>{ //make sure to put this Observable property here
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.httpClient.post('http://localhost:3000/api/contact', newContact, {headers:headers})
    //.pipe(map(res => res.json()));
  }

  //delete method
  deleteContact(id: String): Observable<any>
  {
    return this.httpClient.delete('http://localhost:3000/api/contact/' + id)
    //.pipe(map res => res.json()); //map just seems to be used to map a response to the json response.
  }
}
//Inject all of these methods into our component
