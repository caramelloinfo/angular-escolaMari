import {Component, OnInit} from '@angular/core';
import {FuncoesService} from "../funcoes.service";

@Component({
  selector: 'app-lista-de-funcoes',
  templateUrl: './lista-de-funcoes.component.html',
  styleUrls: ['./lista-de-funcoes.component.css']
})
export class ListaDeFuncoesComponent implements OnInit {

  excluir_ok = false;
  excluir_erro = false;
  funcoes = [];

  constructor(private funcoesService: FuncoesService) {
  }

  ngOnInit() {
    this.atualizarLista();
  }

  excluir(funcao) {
    if (confirm('Tem certeza que deseja excluir a funcao ' + funcao.nome + '?')) {
      this.funcoesService.deleteFuncao(funcao.id)
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
    this.funcoesService.getFuncoes()
      .subscribe(funcoes => this.funcoes = funcoes);
  }
}

