import {Client} from './client';

export class ClientMoral extends Client {

  constructor(private _siret?: string) {
    super();
  }

  get siret(): string {
    return this._siret;
  }

  set siret(value: string) {
    this._siret = value;
  }


}
