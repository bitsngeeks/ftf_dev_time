import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

@Injectable()
export class UsersService {

  token="";
  headers:Headers;
  resultsUser:Object[];
  url='http://192.168.0.20:3000/api/users/me';
  
  constructor(private http:Http) {
    this.resultsUser=[];
    this.token =localStorage.getItem("token");

  this.headers = new Headers({'Content-Type': 'application/json', Authorization: `Bearer ${this.token}`});

   }

  getUser(){
    console.log(this.token);
    let promise = new Promise((resolve,reject)=>{
      this.http.get(this.url, {headers:this.headers})
        .toPromise()
        .then(
          res=>{
            

            this.resultsUser = res.json();            
            console.log(this.resultsUser)
            resolve();
          },
          msg =>{
            reject(msg);
          }
        );
    });
    return promise;
  }
  

}
