import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'
@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.sass']
})
export class GamesComponent implements OnInit {
  data:any;
  searchicon = "https://www.freeiconspng.com/thumbs/search-icon-png/search-icon-png-21.png"
  constructor(private Obj:DataService) { }

  ngOnInit(): void {

  }
  GetPlatform(platform:any){
    this.Obj.GetByPlatform(platform).subscribe( tmp => {
      this.data = tmp;
      console.log(this.data);
    });
  }
}
