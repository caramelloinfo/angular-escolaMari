import {Component, OnInit} from '@angular/core';
import {ProfessoresService} from "../professores.service";

@Component({
  selector: 'app-lista-de-professores',
  templateUrl: './lista-de-professores.component.html',
  styleUrls: ['./lista-de-professores.component.css']
})
export class ListaDeProfessoresComponent implements OnInit {

  excluir_ok = false;
  excluir_erro = false;
  professores = [];

  constructor(private professoresService: ProfessoresService) {
  }

  ngOnInit() {
    this.atualizarLista();
  }

  excluir(professor) {
    if (confirm('Tem certeza que deseja excluir o professor ' + professor.nome + '?')) {
      this.professoresService.deleteProfessor(professor.id)
        .subscribe(ok => {
          this.excluir_ok = true;
          this.excluir_erro = false;
          this.atualizarLista();
        }, erro => {
          this.excluir_ok = false;
          this.excluir_erro = true;
        });
    }
  }

  atualizarLista() {
    this.professoresService.getProfessores()
      .subscribe(professores => this.professores = professores);
  }
}

