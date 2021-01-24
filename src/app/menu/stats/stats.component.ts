import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService} from '../data.service';
@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.sass']
})
export class StatsComponent implements OnInit, OnDestroy {
  tmpData = Array('10','29','46','60','69');
  data:any;
  sub:any;
  constructor(private Obj:DataService) { }

  ngOnInit(): void {
    this.sub = this.Obj.GetAll().subscribe( (tmp:any) =>{
      this.data = tmp.results;
    });
  };

  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}
