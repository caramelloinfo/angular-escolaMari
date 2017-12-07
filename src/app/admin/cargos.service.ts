import {Injectable} from '@angular/core';
import {Cargo} from './cargo.model';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class CargosService {
  API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }
  //(public id: number,
    //public funcoes: Funcao)

  getCargos(q?: string, funcao?: number, nome?: string): Observable<Cargo[]> {
    let url = this.API_URL + '/cargos';
    if (q) {
      url += '?q=' + q;
    }
    if (funcao) {
      const d = 'funcaoId=' + funcao;
      if (url.indexOf('?') != -1) {
        url += '&' + d;
      } else {
        url += '?' + d;
      }
    }
    if (nome) {
      const a = 'nome=' + nome;
      if (url.indexOf('?') != -1) {
        url += '&' + a;
      } else {
        url += '?' + a;
      }
    }
    if (url.indexOf('?') != -1) {
      url += '&_expand=funcao';
    } else {
      url += '?_expand=funcao';
    }
    return this.http.get<Cargo[]>(url);
  }

  getCargo(id: number): Observable<Cargo> {
    return this.http.get<Cargo>(this.API_URL + '/cargos/' + id + '?_expand=funcao');
  }

  save(funcaoId: number, nome: string) {
    const cargo = {'funcaoId': funcaoId, nome: nome};
    return this.http.post(this.API_URL + '/cargos', cargo);
  }

  delete(id: number) {
    return this.http.delete(this.API_URL + '/cargos/' + id);
  }
}
