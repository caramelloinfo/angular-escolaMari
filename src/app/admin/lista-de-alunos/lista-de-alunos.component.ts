import {Component, OnInit} from '@angular/core';
import {AlunosService} from "../alunos.service";

@Component({
  selector: 'app-lista-de-alunos',
  templateUrl: './lista-de-alunos.component.html',
  styleUrls: ['./lista-de-alunos.component.css']
})
export class ListaDeAlunosComponent implements OnInit {

  excluir_ok = false;
  excluir_erro = false;
  alunos = [];

  constructor(private alunosService: AlunosService) {
  }

  ngOnInit() {
    this.atualizarLista();
  }

  excluir(aluno) {
    if (confirm('Tem certeza que deseja excluir o aluno ' + aluno.nome + '?')) {
      this.alunosService.deleteAluno(aluno.id)
        .subscribe(ok => {
          this.excluir_ok = true;
          this.excluir_erro = false;
          this.atualizarLista();
        }, erro => {
          this.excluir_ok = false;
          this.excluir_erro = true;
        });
    }
  }

  atualizarLista() {
    this.alunosService.getAlunos()
      .subscribe(alunos => this.alunos = alunos);
  }
}

