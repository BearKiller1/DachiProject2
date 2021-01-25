import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-allgames',
  templateUrl: './allgames.component.html',
  styleUrls: ['./allgames.component.sass']
})
export class AllgamesComponent implements OnInit, OnDestroy {
  data:any;
  sub:any; // <-- no need !!
  constructor(private Obj:DataService) { }

  ngOnInit(): void {
    this.sub = this.Obj.GetAll().subscribe( (tmp:any) =>{
      this.data = tmp.results;
      console.log(this.data);
    });
  };
  ngOnDestroy(){ // !! The service's obsarvable does not need to be unsubscribed
    this.sub.unsubscribe();
  }

}
