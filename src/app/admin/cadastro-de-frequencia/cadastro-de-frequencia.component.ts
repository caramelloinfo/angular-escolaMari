import { Component, OnInit } from '@angular/core';
import {EscolaService} from '../escola.service';
import { toString } from '@ng-bootstrap/ng-bootstrap/util/util';

@Component({
  selector: 'app-cadastro-de-frequencia',
  templateUrl: './cadastro-de-frequencia.component.html',
  styleUrls: ['./cadastro-de-frequencia.component.css']
})
export class CadastroDeFrequenciaComponent implements OnInit {
  turmas;
  turma;
  alunos;
  aluno;
  disciplinas;
  disciplina;
  professores;
  professor;
  horarios;
  horario;
  frequencia;
  data;
  status;
  cadastro_ok = false;
  cadastro_erro = false;

  constructor(public escolaService: EscolaService) {
  }

  ngOnInit() {

    this.escolaService.getTurmas()
      .subscribe(turmas => this.turmas = turmas);

    this.escolaService.getAlunos()
      .subscribe(alunos => this.alunos = alunos);

    this.escolaService.getDisciplinas()
      .subscribe(disciplinas => this.disciplinas = disciplinas);

    this.escolaService.getProfessores()
      .subscribe(professores => this.professores = professores);

    this.escolaService.getHorarios()
      .subscribe(horarios => this.horarios = horarios);
  }

  salvar() {
    this.escolaService.addFrequencia(this.turma, this.aluno, this.disciplina, this.professor, 
                                    this.horario, toString(this.data), this.status)
      .subscribe(
        frequencia => {
          this.limpar();
          this.cadastro_ok = true;
        },
        erro => {
          this.cadastro_erro = true;
          this.cadastro_ok = false;
        }
      );
  }

  limpar() {
    this.turma = null;
    this.aluno = null;
    this.disciplina = null;
    this.professor = null;
    this.horario = null;
    this.data = null;
    this.status = null;
    this.cadastro_ok = false;
    this.cadastro_erro = false;
  }
}