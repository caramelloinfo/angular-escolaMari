import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AdminComponent} from './admin/admin.component';
import {PaginaNaoEncontradaComponent} from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { CadastroDeFrequenciaComponent } from './cadastro-de-frequencia/cadastro-de-frequencia.component';
import {RelatorioComponent} from './relatorio/relatorio.component';
import { RelatorioDeTurmaComponent } from './relatorio-de-turma/relatorio-de-turma.component';


const routes: Routes = [
  {
    path: 'admin', component: AdminComponent, children: [
    {path: '', component: RelatorioComponent},
    {path: 'frequencias/cadastrar', component: CadastroDeFrequenciaComponent},
    {path: 'frequencias/relatorio', component: RelatorioComponent},
    {path: 'turmas/relatorio', component: RelatorioDeTurmaComponent},
    {path: '**', component: PaginaNaoEncontradaComponent}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
