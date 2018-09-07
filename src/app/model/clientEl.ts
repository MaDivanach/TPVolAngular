import {Client} from './client';

export class ClientEl extends Client {

  constructor(private _prenom?: string) {
    super();
  }

  get prenom(): string {
    return this._prenom;
  }

  set prenom(value: string) {
    this._prenom = value;
  }
}
