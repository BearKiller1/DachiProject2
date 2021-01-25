import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { DataService} from '../data.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass']
})
export class DetailComponent implements OnInit {
  sub:any;
  data:any;
  id:any;
  constructor(private route:ActivatedRoute, private Obj:DataService) { }

  ngOnInit(): void {
    this.id= this.route.snapshot.paramMap.get('id');
    this.Obj.GetById(this.id).subscribe( test =>{
      this.data = test;
    });
  }
}