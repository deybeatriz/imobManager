import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  baseAPI = 'http://localhost:3000/user'

  constructor(private http:HttpClient) { }

  //return All Data via Gret Method
  getAll(){
    return this.http.get(this.baseAPI);
  }

  // get recorded by single id
  getById(id:any){
    return this.http.get(this.baseAPI+'/'+id);
  }

  // register User via method
  registerData (inputdata:any){
    return this.http.post(this.baseAPI, inputdata);
  }

  // update user via put method
  updateData(id:any, inputdata:any){
    return this.http.put(this.baseAPI+'/'+id,inputdata);
  }
}
