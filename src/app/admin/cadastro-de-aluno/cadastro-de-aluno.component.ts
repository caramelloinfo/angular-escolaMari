import { Component, OnInit } from '@angular/core';
import {AlunosService} from "../alunos.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-cadastro-de-aluno',
  templateUrl: './cadastro-de-aluno.component.html',
  styleUrls: ['./cadastro-de-aluno.component.css']
})
export class CadastroDeAlunoComponent implements OnInit {
  id = null;
  nome = null;
  prensenca = null;
  falta = null;
  cadastro_ok = false;
  cadastro_erro = false;
  atualizar_ok = false;
  atualizar_erro = false;

  constructor(private alunosService: AlunosService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    if (this.id) {
      this.alunosService.getAluno(this.id)
        .subscribe(aluno => {
          this.nome = aluno.nome;
          this.prensenca = aluno.presenca;
          this.falta = aluno.falta;
          
        });
    }
  }

  salvar() {
    if (this.id) {
      this.alunosService.updateAluno(this.id, this.nome, this.prensenca, this.falta)
        .subscribe(aluno => {
            this.atualizar_ok = true;
            this.atualizar_erro = false;
          },
          erro => {
            this.atualizar_ok = false;
            this.atualizar_erro = true;
          });
    } else {
      this.alunosService.addAluno(this.nome, this.prensenca, this.falta)
        .subscribe(aluno => {
            console.log(aluno);
            this.cadastro_ok = true;
            this.cadastro_erro = false;
            this.nome = null;
            this.prensenca = null;
            this.falta = null;
            
          },
          erro => {
            this.cadastro_ok = false;
            this.cadastro_erro = true;
          });
    }
  }

}
