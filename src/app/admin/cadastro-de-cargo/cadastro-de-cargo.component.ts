import {Component, OnInit} from '@angular/core';
import {FuncoesService} from "../funcoes.service";
import {CargosService} from "../cargos.service";
import {Funcao} from "../funcao.model"

@Component({
  selector: 'app-cadastro-de-cargo',
  templateUrl: './cadastro-de-cargo.component.html',
  styleUrls: ['./cadastro-de-cargo.component.css']
})
export class CadastroDeCargoComponent implements OnInit {
  funcoes2: Array<Funcao>;
  funcoes = null;
  codigo;
  nome;
  cargo;
  cadastro_ok = false;
  cadastro_erro = false;
  editando = false;
  idFuncao = 0;
  funcaoAtual: Funcao = new Funcao(0,'');

  constructor(private funcoesService: FuncoesService,
              private cargosService: CargosService) {
                this.funcoes2 = [
                  new Funcao(1, 'Função1'),
                  new Funcao(2, 'Função2'),
                  new Funcao(3, 'Função3'),
              ];
  }

  ngOnInit() {
    this.funcoesService.getFuncoes()
      .subscribe(funcoes => this.funcoes = funcoes);
  }

  salvar() {
    this.cargosService.save(parseInt(this.funcoes), this.nome)
      .subscribe(
        cargo => {
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
    this.codigo = null;
    this.nome = null;
    this.funcoes = null;
    this.cadastro_ok = false;
    this.cadastro_erro = false;
  }

  cadastrarFuncaoTurma(): void {
    if(!this.editando){
        const novo_id: number = ++this.idFuncao;
        this.funcoes.push(new Funcao(novo_id ,this.funcaoAtual.nome));
        this.funcaoAtual = new Funcao(0,'');
          
    }
    else{
        this.funcaoAtual = new Funcao(0,'');
        this.editando = false;
    }
}
}
