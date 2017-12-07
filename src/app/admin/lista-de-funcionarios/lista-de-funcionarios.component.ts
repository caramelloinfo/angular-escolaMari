import {Component, OnInit} from '@angular/core';
import {Funcionario} from '../funcionario.model';
import {Pessoa} from '../pessoa.model';
import {Cargo} from '../cargo.model';
import {FuncionariosService} from '../funcionarios.service';
import {PessoasService} from '../pessoas.service';
import {CargosService} from '../cargos.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-lista-de-funcionarios',
  templateUrl: './lista-de-funcionarios.component.html',
  styleUrls: ['./lista-de-funcionarios.component.css']
})
export class ListaDeFuncionariosComponent implements OnInit {
  funcionarios = [];
  pessoas = [];
  cargos = [];
  tipo = [];
  q = null;
  filtroPorTipo = null;
  excluir_ok = false;
  excluir_erro = false;


  constructor(private funcionariosService: FuncionariosService,
              private pessoasService: PessoasService,
              private cargosService: CargosService,
              private router: Router) {
  }

  ngOnInit() {
    this.pessoasService.getPessoas()
      .subscribe(pessoas => this.pessoas = pessoas);
    this.tipo = ["Administrativo", "Docente"];
    this.cargosService.getCargos()
      .subscribe(cargos => this.cargos = cargos);
    this.atuarlizarLista();
  }

  excluir(funcionario: Funcionario) {
    this.funcionariosService.delete(funcionario.id)
      .subscribe(ok => {
          this.excluir_ok = true;
          this.excluir_erro = false;
          this.atuarlizarLista();
        },
        erro => {
          this.excluir_ok = false;
          this.excluir_erro = true;
        });
  }

  removerFiltroPorTipo() {
    this.filtroPorTipo = null;
    this.atuarlizarLista();
  }

 
  filtrarPorTipo(tipo: string) {
    this.filtroPorTipo = tipo;
    this.atuarlizarLista();
  }

 
  pesquisar() {
    this.atuarlizarLista();
  }

  atuarlizarLista() {
    this.funcionariosService.getFuncionarios(this.q, this.filtroPorTipo)
      .subscribe(funcionarios => this.funcionarios = funcionarios);
  }

  abrir(funcionario: Funcionario) {
    this.router.navigate(['admin', 'funcionarios', funcionario.id]);
  }
}
