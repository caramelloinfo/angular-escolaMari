import { Component, OnInit } from '@angular/core';
import {FuncoesService} from "../funcoes.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-cadastro-de-funcao',
  templateUrl: './cadastro-de-funcao.component.html',
  styleUrls: ['./cadastro-de-funcao.component.css']
})
export class CadastroDeFuncaoComponent implements OnInit {
  id = null;
  nome = null;
  cadastro_ok = false;
  cadastro_erro = false;
  atualizar_ok = false;
  atualizar_erro = false;

  constructor(private funcoesService: FuncoesService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    if (this.id) {
      this.funcoesService.getFuncao(this.id)
        .subscribe(funcao => {
          this.nome = funcao.nome;
          
        });
    }
  }

  salvar() {
    if (this.id) {
      this.funcoesService.updateFuncao(this.id, this.nome)
        .subscribe(funcao => {
            this.atualizar_ok = true;
            this.atualizar_erro = false;
          },
          erro => {
            this.atualizar_ok = false;
            this.atualizar_erro = true;
          });
    } else {
      this.funcoesService.addFuncao(this.nome)
        .subscribe(funcao => {
            console.log(funcao);
            this.cadastro_ok = true;
            this.cadastro_erro = false;
            this.nome = null;
            
          },
          erro => {
            this.cadastro_ok = false;
            this.cadastro_erro = true;
          });
    }
  }

}
