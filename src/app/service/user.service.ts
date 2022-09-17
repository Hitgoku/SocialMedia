import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) {
   }

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getPosts(userId:number) {

    return this.http.get('https://jsonplaceholder.typicode.com/users/'+userId+'/posts');
  }
}
