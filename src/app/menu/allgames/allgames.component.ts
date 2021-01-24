import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-allgames',
  templateUrl: './allgames.component.html',
  styleUrls: ['./allgames.component.sass']
})
export class AllgamesComponent implements OnInit, OnDestroy {
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
