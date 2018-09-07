import {Component, OnInit} from '@angular/core';
import {ClientService} from '../service/client.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit {

  client: Client = new Client();

  constructor(private clientService: ClientService, private ar: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    this.ar.params.subscribe(params => {
      if (params.id) {
        this.clientService.findById(params.id).subscribe(resp => {
          this.client = resp;
        });
      }
    });
  }

  public save() {
    this.clientService.save(this.client).subscribe(resp => {
      this.router.navigate(['/client']);
    });
  }
}
