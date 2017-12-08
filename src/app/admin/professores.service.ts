import {Injectable} from '@angular/core';
import {Professor} from './professor.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';


@Injectable()
export class ProfessoresService {
  API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }

  getProfessores(): Observable<any[]> {
    return this.http.get<any[]>(this.API_URL + '/professores');
  }

  getProfessor(id: number): Observable<any> {
    return this.http.get(this.API_URL + '/professores/' + id);
  }

  addProfessor(nome: string): Observable<any> {
    const professor = {nome: nome};
    return this.http.post(this.API_URL + '/professores', professor);
  }

  updateProfessor(id: number, nome: string): Observable<any> {
    const professor = {nome: nome};
    return this.http.patch(this.API_URL + '/professores/' + id, professor);
  }

  deleteProfessor(id: number) {
    return this.http.delete(this.API_URL + '/professores/' + id);
  }
}
