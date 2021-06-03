import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  num:any;
  constructor(private http: HttpClient ) { }
  linkvalue(): Observable<any> { 
    console.log(this.num);
    
    return this.http.get('http://www.numbersapi.com/'+ this.num +'?json').pipe(map(res =>{
      return res;  
    }))
  }
  getdata(data : any) {
    this.num = data; 
  }
}
