import {Pessoa} from "./pessoa.model";
import {Cargo} from "./cargo.model";

export class Funcionario {
  constructor(public id: number,
              public codigo: string,
              public pessoa: Pessoa,
              public tipo: String,
              public cargo: Cargo) {
  }
}