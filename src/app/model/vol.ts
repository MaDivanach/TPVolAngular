export class Adherent {
  constructor(private _id?: number, private _dateDepart?: Date, private _dateArrivee?: Date, private _heureDepart?: Date, private _heureArrivee?: Date) {

  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get dateDepart(): Date {
    return this._dateDepart;
  }

  set dateDepart(value: Date) {
    this._dateDepart = value;
  }

  get dateArrivee(): Date {
    return this._dateArrivee;
  }

  set dateArrivee(value: Date) {
    this._dateArrivee = value;
  }

  get heureDepart(): Date {
    return this._heureDepart;
  }

  set heureDepart(value: Date) {
    this._heureDepart = value;
  }

  get heureArrivee(): Date {
    return this._heureArrivee;
  }

  set heureDepart(value: Date) {
    this._heureArrivee = value;
  }

}


