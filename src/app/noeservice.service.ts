import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NOEServiceService {
  readonly ApPIUrl="";

  constructor(private http:HttpClient) { }

  addEmployee(val:any)
  {
    return this.http.post(this.ApPIUrl+'/Employee',val);
  }

}
