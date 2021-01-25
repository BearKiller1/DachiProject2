import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  api_key = "key=9322182838084ca58ecc7563738a5046";
  link = "https://api.rawg.io/api/games";
  data = [
    {id:1, name:"CyberPunk 2077", price:50, img:"https://tse1.mm.bing.net/th?id=OIP.hF31t9tW-fhqkgtXNysmtQHaHa&pid=Api&P=0&w=300&h=300"},
    {id:2, name:"GTA V", price:20, img:"https://tse2.mm.bing.net/th?id=OIP.DvXbhjCPGG_A282SlsMCpQHaEK&pid=Api&P=0&w=287&h=162"},
    {id:3, name:"League Of Legends", price:10, img:"https://theleaker.com/wp-content/uploads/2019/05/league-of-legends.jpg"},
    {id:4, name:"Counter Strike GO", price:24, img:"https://cdn.wccftech.com/wp-content/uploads/2015/03/LTLmf.jpg"},
    {id:5, name:"MineCraft", price:15, img:"https://images.techhive.com/images/article/2014/08/minecraft_logo-100371548-large.jpg"},
    {id:5, name:"MineCraft", price:15, img:"https://images.techhive.com/images/article/2014/08/minecraft_logo-100371548-large.jpg"},
    {id:5, name:"MineCraft", price:15, img:"https://images.techhive.com/images/article/2014/08/minecraft_logo-100371548-large.jpg"}
  ]; // <-- no need

  constructor(private http:HttpClient) { }

  DemoGetAll(){  // <-- no need
     return this.data;
  };
  GetAll(){
    return this.http.get(this.link + "?" + this.api_key);
  };

  DemoGetById(id:any): any{  // <-- no need
    for( let i=0; i!=this.data.length;i++){
      if ( id == this.data[i]['id']){
        return this.data[i];
      };
    };
  };
  GetById(id:any){
    return this.http.get(this.link + "/"+ id + "?" + this.api_key);
  }
}
