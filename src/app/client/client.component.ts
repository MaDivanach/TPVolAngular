import { Component, OnInit } from '@angular/core';
import {ClientService} from '../service/client.service';
import {Client} from '../model/client';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  clients: Client[];

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.list();
  }

  public list() {
    this.clientService.list().subscribe(resp => {
      this.clients = resp;
    });
  }
  public delete(id_client: number) {
    this.clientService.delete(id_client).subscribe(resp => {
      this.list();
    });
  }
}
