export class Reservation {
  constructor(
    private _id?: number,
    private _date?: Date,
    private _numero?: number,
    /*private _client?: Client,
    private _vol?: Vol,
    private _passager?: Passager*/) {
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get date(): Date {
    return this._date;
  }

  set date(value: Date) {
    this._date = value;
  }

  get numero(): number {
    return this._numero;
  }

  set numero(value: number) {
    this._numero = value;
  }

/*  get client(): Client {
    return this._client;
  }

  set client(value: Client) {
    this._client = value;
  }

  get vol(): Vol {
    return this._vol;
  }

  set vol(value: Vol) {
    this._vol = value;
  }

  get passager(): Passager {
    return this._passager;
  }

  set passager(value: Passager) {
    this._passager = value;*/
  }
}
