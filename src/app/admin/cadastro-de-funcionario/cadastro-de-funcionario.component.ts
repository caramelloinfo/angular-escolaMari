import {Component, OnInit} from '@angular/core';
import {PessoasService} from "../pessoas.service";
import {FuncionariosService} from "../funcionarios.service";
import {CargosService} from "../cargos.service";

@Component({
  selector: 'app-cadastro-de-funcionario',
  templateUrl: './cadastro-de-funcionario.component.html',
  styleUrls: ['./cadastro-de-funcionario.component.css']
})
export class CadastroDeFuncionarioComponent implements OnInit {
  pessoas = null;
  cargos = null;
  codigo;
  tipo;
  pessoa;
  cargo;
  cadastro_ok = false;
  cadastro_erro = false;

  constructor(private pessoasService: PessoasService,
              private funcionariosService: FuncionariosService,
              private cargosService: CargosService) {
  }

  ngOnInit() {
    this.pessoasService.getPessoas()
      .subscribe(pessoas => this.pessoas = pessoas);
    this.cargosService.getCargos()
      .subscribe(cargos => this.cargos = cargos );
  }

  salvar() {
    this.funcionariosService.save(this.codigo, parseInt(this.pessoa), this.tipo, parseInt(this.cargo))
      .subscribe(
        funcionario => {
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
    this.tipo = null;
    this.pessoa = null;
    this.cargo = null;
    this.cadastro_ok = false;
    this.cadastro_erro = false;
  }
}
