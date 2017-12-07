import {Injectable} from '@angular/core';
import {Aluno} from './aluno.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';


@Injectable()
export class AlunosService {
  API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }

  getAlunos(): Observable<any[]> {
    return this.http.get<any[]>(this.API_URL + '/alunos');
  }

  getAluno(id: number): Observable<any> {
    return this.http.get(this.API_URL + '/alunos/' + id);
  }

  addAluno(nome: string, presenca?: string, falta?: string): Observable<any> {
    const aluno = {nome: nome, presenca: presenca, falta: falta};
    return this.http.post(this.API_URL + '/alunos', aluno);
  }

  updateAluno(id: number, nome: string, presenca?: string, falta?: string): Observable<any> {
    const aluno = {nome: nome, presenca: presenca, falta: falta};
    return this.http.patch(this.API_URL + '/alunos/' + id, aluno);
  }

  deleteAluno(id: number) {
    return this.http.delete(this.API_URL + '/alunos/' + id);
  }
}
