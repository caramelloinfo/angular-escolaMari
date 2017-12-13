import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EscolaService} from './escola.service';
import {AdminRoutingModule} from './admin-routing.module';
import {HomeComponent} from './home/home.component';
import {AdminComponent} from './admin/admin.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from '../shared/shared.module';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { CadastroDeFrequenciaComponent } from './cadastro-de-frequencia/cadastro-de-frequencia.component';
import { RelatorioComponent } from './relatorio/relatorio.component';
import { RelatorioDeTurmaComponent } from './relatorio-de-turma/relatorio-de-turma.component';

//import { RelatorioComponent } from './relatorio/relatorio.component';

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
    CadastroDeFrequenciaComponent,
    PaginaNaoEncontradaComponent,
    RelatorioComponent,
    RelatorioDeTurmaComponent,
    //RelatorioComponent
  ],
  providers: [
    EscolaService
  ]
})
export class AdminModule {
}
