import {Component, OnInit} from '@angular/core';
import {PassagerService} from '../service/passager.service';
import {Passager} from '../model/passager';

@Component({
  selector: 'app-passager',
  templateUrl: './passager.component.html',
  styleUrls: ['./passager.component.css']
})
export class PassagerComponent implements OnInit {

  passagers: Passager[];

  constructor(private passagerService: PassagerService) {


  }

  ngOnInit() {
    this.list();
  }

  public list() {
    this.passagerService.list().subscribe(resp => {
      this.passagers = resp;
    }, error => console.log(error));
  }

  public delete(id: number) {
    return this.passagerService.delete(id).subscribe(resp => {
      this.list();
    });
  }
}
