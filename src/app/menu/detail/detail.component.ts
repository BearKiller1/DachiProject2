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
  Desc:any;
  constructor(private route:ActivatedRoute, private Obj:DataService) { }

  ngOnInit(): void {
    this.sub = this.route.paramMap.subscribe( tmp =>{
      var id = tmp.get('id');
      this.Obj.GetById(id).subscribe( test =>{
        this.data = test;
      });
    });

  }

  convert(html:any){
    this.Desc = html;
  }
}
