import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {HomeComponent} from './home/home.component';
import {AdminComponent} from './admin/admin.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from '../shared/shared.module';
import {CadastroDeDisciplinaComponent} from './cadastro-de-disciplina/cadastro-de-disciplina.component';
import {CadastroDeTurmaComponent} from './cadastro-de-turma/cadastro-de-turma.component';
import {DisciplinaComponent} from './disciplina/disciplina.component';
import {ListaDeDisciplinasComponent} from './lista-de-disciplinas/lista-de-disciplinas.component';
import {ListaDeTurmasComponent} from './lista-de-turmas/lista-de-turmas.component';
import {TurmaComponent} from './turma/turma.component';
import {DisciplinasService} from './disciplinas.service';
import {TurmasService} from './turmas.service';
import {PessoasService} from './pessoas.service';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { CadastroDePessoasComponent } from './cadastro-de-pessoas/cadastro-de-pessoas.component';
import { PessoaComponent } from './pessoa/pessoa.component';
import { ListaDePessoasComponent } from './lista-de-pessoas/lista-de-pessoas.component';

import { FuncionariosService } from './funcionarios.service';
import { FuncionarioComponent } from './funcionario/funcionario.component';
import { CadastroDeFuncionarioComponent } from './cadastro-de-funcionario/cadastro-de-funcionario.component';
import { ListaDeFuncionariosComponent } from './lista-de-funcionarios/lista-de-funcionarios.component';

import { FuncoesService } from './funcoes.service';
import { CadastroDeFuncaoComponent } from './cadastro-de-funcao/cadastro-de-funcao.component';
import { FuncaoComponent } from './funcao/funcao.component';
import { ListaDeFuncoesComponent } from './lista-de-funcoes/lista-de-funcoes.component';

import { CargosService } from './cargos.service';
import { CargoComponent } from './cargo/cargo.component';
import { CadastroDeCargoComponent } from './cadastro-de-cargo/cadastro-de-cargo.component';
import { ListaDeCargosComponent } from './lista-de-cargos/lista-de-cargos.component';

import { AlunosService } from './alunos.service';
import { CadastroDeAlunoComponent } from './cadastro-de-aluno/cadastro-de-aluno.component';
import { AlunoComponent } from './aluno/aluno.component';
import { ListaDeAlunosComponent } from './lista-de-alunos/lista-de-alunos.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    AdminRoutingModule,
    SharedModule,
    
  ],
  declarations: [
    HomeComponent,
    AdminComponent,
    CadastroDeDisciplinaComponent,
    CadastroDeTurmaComponent,
    DisciplinaComponent,
    ListaDeDisciplinasComponent,
    ListaDeTurmasComponent,
    TurmaComponent,
    PaginaNaoEncontradaComponent,
    CadastroDePessoasComponent,
    PessoaComponent,
    ListaDePessoasComponent,
    FuncionarioComponent,
    CadastroDeFuncionarioComponent,
    ListaDeFuncionariosComponent,
    CadastroDeFuncaoComponent,
    FuncaoComponent,
    ListaDeFuncoesComponent,
    CargoComponent,
    CadastroDeCargoComponent,
    ListaDeCargosComponent,
    CadastroDeAlunoComponent,
    AlunoComponent,
   ListaDeAlunosComponent,
    
  ],
  providers: [
    DisciplinasService,
    TurmasService,
    FuncionariosService,
    FuncoesService,
    CargosService,
    AlunosService,
    
  ]
})
export class AdminModule {
}
