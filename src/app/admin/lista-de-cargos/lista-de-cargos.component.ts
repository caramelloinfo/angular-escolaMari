import {Component, OnInit} from '@angular/core';
import {Cargo} from '../cargo.model';
import {Funcao} from '../funcao.model';
import {CargosService} from '../cargos.service';
import {FuncoesService} from '../funcoes.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-lista-de-cargos',
  templateUrl: './lista-de-cargos.component.html',
  styleUrls: ['./lista-de-cargos.component.css']
})
export class ListaDeCargosComponent implements OnInit {
  cargos = [];
  funcoes = [];
  q = null;
  filtroPorTipo = null;
  excluir_ok = false;
  excluir_erro = false;


  constructor(private cargosService: CargosService,
              private funcoesService: FuncoesService,
              private router: Router) {
  }

  ngOnInit() {
    this.funcoesService.getFuncoes()
      .subscribe(funcoes => this.funcoes = funcoes);
    this.atuarlizarLista();
  }

  excluir(cargo: Cargo) {
    this.cargosService.delete(cargo.id)
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


 
  pesquisar() {
    this.atuarlizarLista();
  }

  atuarlizarLista() {
    this.cargosService.getCargos(this.q)
      .subscribe(cargos => this.cargos = cargos);
  }

  abrir(cargo: Cargo) {
    this.router.navigate(['admin', 'cargos', cargo.id]);
  }
}
