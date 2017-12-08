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

import { AlunoComponent } from './aluno/aluno.component';
import { CadastroDeAlunoComponent } from './cadastro-de-aluno/cadastro-de-aluno.component';
import { ListaDeAlunosComponent } from './lista-de-alunos/lista-de-alunos.component';

import { ProfessorComponent } from './professor/professor.component';
import { CadastroDeProfessorComponent } from './cadastro-de-professor/cadastro-de-professor.component';
import { ListaDeProfessoresComponent } from './lista-de-professores/lista-de-professores.component';


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
      
      {path: 'alunos', component: ListaDeAlunosComponent},
      {path: 'alunos/:id', component: AlunoComponent},
      {path: 'alunos/:id/novo', component: CadastroDeAlunoComponent},
      {path: 'alunos/:id/editar', component: CadastroDeAlunoComponent},

      {path: 'professores', component: ListaDeProfessoresComponent},
      {path: 'professores/:id', component: ProfessorComponent},
      {path: 'professores/:id/novo', component: CadastroDeProfessorComponent},
      {path: 'professores/:id/editar', component: CadastroDeProfessorComponent},

      
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
