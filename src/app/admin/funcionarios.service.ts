import {Injectable} from '@angular/core';
import {Funcionario} from './funcionario.model';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class FuncionariosService {
  API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }
  

  getFuncionarios(q?: string, pessoa?: number, tipo?: string, cargo?: number): Observable<Funcionario[]> {
    let url = this.API_URL + '/funcionarios';
    if (q) {
      url += '?q=' + q;
    }
    if (pessoa) {
      const d = 'pessoaId=' + pessoa;
      if (url.indexOf('?') != -1) {
        url += '&' + d;
      } else {
        url += '?' + d;
      }
    }
    if (cargo) {
      const d = 'cargoId=' + cargo;
      if (url.indexOf('?') != -1) {
        url += '&' + d;
      } else {
        url += '?' + d;
      }
    }
    if (tipo) {
      const a = 'tipo=' + tipo;
      if (url.indexOf('?') != -1) {
        url += '&' + a;
      } else {
        url += '?' + a;
      }
    }
    if (url.indexOf('?') != -1) {
      url += '&_expand=pessoa';
    } else {
      url += '?_expand=pessoa';
    }
    
    return this.http.get<Funcionario[]>(url);
  }

  getFuncionario(id: number): Observable<Funcionario> {
    return this.http.get<Funcionario>(this.API_URL + '/funcionarios/' + id + '?_expand=pessoa');
  }

  save(codigo: string, pessoaId: number, tipo: string, cargoId: number) {
    const funcionario = {'codigo': codigo, 'pessoaId': pessoaId, tipo: tipo, cargoId: cargoId};
    return this.http.post(this.API_URL + '/funcionarios', funcionario);
  }

  delete(id: number) {
    return this.http.delete(this.API_URL + '/funcionarios/' + id);
  }
}
