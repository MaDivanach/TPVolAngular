import {Client} from './client';

export class ClientPhysique extends Client {

  constructor(private _prenom?: string) {
    super();
  }

  get prenom() {
    return this._prenom;
  }

  set prenom(value: string) {
    this._prenom;
  }

}
