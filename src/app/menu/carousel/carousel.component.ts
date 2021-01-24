import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service'
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.sass']
})
export class CarouselComponent implements OnInit {
  data:any;
  constructor(private Obj:DataService) { }

  ngOnInit(): void {
    this.data = this.Obj.DemoGetAll();
  }

}
