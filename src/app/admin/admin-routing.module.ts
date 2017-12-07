import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AdminComponent} from './admin/admin.component';

import {ListaDeDisciplinasComponent} from './lista-de-disciplinas/lista-de-disciplinas.component';
import {ListaDeTurmasComponent} from './lista-de-turmas/lista-de-turmas.component';

import {DisciplinaComponent} from './disciplina/disciplina.component';
import {TurmaComponent} from './turma/turma.component';


import {CadastroDeDisciplinaComponent} from './cadastro-de-disciplina/cadastro-de-disciplina.component';
import {CadastroDeTurmaComponent} from './cadastro-de-turma/cadastro-de-turma.component';


import { FuncionarioComponent } from './funcionario/funcionario.component';
import { CadastroDeFuncionarioComponent } from './cadastro-de-funcionario/cadastro-de-funcionario.component';
import { ListaDeFuncionariosComponent } from './lista-de-funcionarios/lista-de-funcionarios.component';

import { CadastroDeFuncaoComponent } from './cadastro-de-funcao/cadastro-de-funcao.component';
import { FuncaoComponent } from './funcao/funcao.component';
import { ListaDeFuncoesComponent } from './lista-de-funcoes/lista-de-funcoes.component';

import { CargoComponent } from './cargo/cargo.component';
import { CadastroDeCargoComponent } from './cadastro-de-cargo/cadastro-de-cargo.component';
import { ListaDeCargosComponent } from './lista-de-cargos/lista-de-cargos.component';

import { AlunoComponent } from './aluno/aluno.component';
import { CadastroDeAlunoComponent } from './cadastro-de-aluno/cadastro-de-aluno.component';
import { ListaDeAlunosComponent } from './lista-de-alunos/lista-de-alunos.component';

import {PaginaNaoEncontradaComponent} from './pagina-nao-encontrada/pagina-nao-encontrada.component';

const routes: Routes = [
  {
    path: 'admin', component: AdminComponent, children: [
      {path: 'disciplinas', component: ListaDeDisciplinasComponent},
      {path: 'disciplinas/:id', component: DisciplinaComponent},
      {path: 'disciplinas/:id/novo', component: CadastroDeDisciplinaComponent},
      {path: 'disciplinas/:id/editar', component: CadastroDeDisciplinaComponent},
      
      {path: 'cadastrar-turma', component: CadastroDeTurmaComponent},
      {path: 'turmas', component: ListaDeTurmasComponent},
      {path: 'turmas/:id', component: TurmaComponent},
      {path: 'cadastrar-funcionario', component: CadastroDeFuncionarioComponent},
      {path: 'funcionarios', component: ListaDeFuncionariosComponent},
      {path: 'funcionarios/:id', component: FuncionarioComponent},
      {path: 'funcoes', component: ListaDeFuncoesComponent},
      {path: 'funcoes/:id', component: FuncaoComponent},
      {path: 'funcoes/:id/novo', component: CadastroDeFuncaoComponent},
      {path: 'funcoes/:id/editar', component: CadastroDeFuncaoComponent},
      {path: 'cadastrar-cargo', component: CadastroDeCargoComponent},
      {path: 'cargos', component: ListaDeCargosComponent},
      {path: 'cargos/:id', component: CargoComponent},

      {path: 'alunos', component: ListaDeAlunosComponent},
      {path: 'alunos/:id', component: AlunoComponent},
      {path: 'alunos/:id/novo', component: CadastroDeAlunoComponent},
      {path: 'alunos/:id/editar', component: CadastroDeAlunoComponent},
      
      {path: '', component: HomeComponent},
      {path: '**', component: PaginaNaoEncontradaComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
