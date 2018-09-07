import { Component, OnInit } from '@angular/core';
import {PassagerService} from '../service/passager.service';

@Component({
  selector: 'app-passager',
  templateUrl: './passager.component.html',
  styleUrls: ['./passager.component.css']
})
export class PassagerComponent implements OnInit {

  constructor(private passagerService: PassagerService) {


  }

  ngOnInit() {
  }

}
