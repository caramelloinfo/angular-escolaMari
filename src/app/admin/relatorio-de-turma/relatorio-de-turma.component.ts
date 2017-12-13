import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EscolaService } from '../escola.service';

@Component({
  selector: 'app-relatorio-de-turma',
  templateUrl: './relatorio-de-turma.component.html',
  styleUrls: ['./relatorio-de-turma.component.css']
})
export class RelatorioDeTurmaComponent implements OnInit {
turmas = [];
professores = [];
alunos = [];

  constructor(private escolaService: EscolaService,
    private router: Router) { }

  ngOnInit() {
    this.escolaService.getTurmasRelatorio()
      .subscribe(professoresNasTurmas => this.professores = professoresNasTurmas); 

    this.escolaService.getTurmas()
      .subscribe(turmas => this.turmas = turmas);   

    this.escolaService.getTurmas()
      .subscribe(alunos => this.alunos = alunos);       
  }

}
