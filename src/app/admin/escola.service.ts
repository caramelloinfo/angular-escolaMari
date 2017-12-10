import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';


@Injectable()
export class EscolaService {
  API_URL = 'http://localhost:3000';
  cont = 0;
  frequencia = (this.API_URL + '/frequencias/');
  aluno = (`${this.API_URL}/alunos/`);
  
  

  constructor(private http: HttpClient) {
  }
  getTurmas(): Observable<any[]> {
    return this.http.get<any[]>(this.API_URL + '/turmas/');
  }

  getProfessores(): Observable<any[]> {
    return this.http.get<any[]>(this.API_URL + '/professors/');
  }

  getMatriculas(): Observable<any[]> {
    return this.http.get<any[]>(this.API_URL + '/matriculas/');
  }

  getHorarios(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API_URL}/horarios/`);
  }

  getDisciplinas(): Observable<any[]> {
    return this.http.get<any[]>(this.API_URL + '/disciplinas/');
  }

  getAlunos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API_URL}/alunos/`);
  }

  getFrequencias(): Observable<any[]> {
    return this.http.get<any[]>(this.API_URL + '/frequencias?_expand=turma&_expand=professor&_expand=disciplina&_expand=aluno');
  }

  getFrequenciaId(id: number): Observable<any> {
    
    return this.http.get(this.API_URL + '/frequencias/' + id);


    
  }

  addFrequencia(turmaId: number, alunoId: number, disciplinaId: number, professorId: number, 
                horarioId: number, data: string, status: string): Observable<any> {
    const frequencia = {turmaId: turmaId, alunoId: alunoId, disciplinaId: disciplinaId, 
            professorId: professorId, horarioId: horarioId, data: data, status: status};
    return this.http.post(this.API_URL + '/frequencias', frequencia);
  }




}