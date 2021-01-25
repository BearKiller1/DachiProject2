import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  api_key = "key=9322182838084ca58ecc7563738a5046";
  link = "https://api.rawg.io/api/games";

  constructor(private http:HttpClient) { }

  GetAll(){
    return this.http.get(this.link + "?" + this.api_key);
  };

  GetById(id:any){
    return this.http.get(this.link + "/"+ id + "?" + this.api_key);
  }
  GetByPlatform(platform:any){
    return this.http.get(this.link + "/platforms?" + platform + "?" + this.api_key);
  }
}
