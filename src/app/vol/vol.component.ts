import {Component, OnInit} from '@angular/core';
import {VolService} from '../service/vol.service';

@Component({
  selector: 'app-vol',
  templateUrl: './vol.component.html',
  styleUrls: ['./vol.component.css']
})
export class VolComponent implements OnInit {

  vols: vol[];

  constructor() {
  }

  ngOnInit() {
  }

  public list() {
    this.volService.list().subscribe(resp => {
      this.vols = resp;
    }, error => {
      console.log(error);
    });
  }

  public delete(id: number) {
    this.volService.delete(id).subscribe(resp => {
      this.list();
    });
  }

}
