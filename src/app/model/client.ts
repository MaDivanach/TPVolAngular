import {Adresse} from './adresse';
import {Login} from './login';

export class Client {
  constructor(private _id?: number, private _nom?: string, private _numeroTel?: number, private _numeroFax?: number, private _email?: string, private _adresse?: Adresse, private _login?: Login) {

  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }

  get numeroTel(): number {
    return this._numeroTel;
  }

  set numeroTel(value: number) {
    this._numeroTel = value;
  }

  get numeroFax(): number {
    return this._numeroFax;
  }

  set numeroFax(value: number) {
    this._numeroFax = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get adresse(): Adresse {
    return this._adresse;
  }

  set adresse(value: Adresse) {
    this._adresse = value;
  }

  get login(): Login {
    return this._login;
  }

  set login(value: Login) {
    this._login = value;
  }
}
