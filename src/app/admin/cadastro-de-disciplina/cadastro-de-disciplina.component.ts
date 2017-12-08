import {Component, OnInit} from '@angular/core';
import {DisciplinasService} from "../disciplinas.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-cadastro-de-disciplina',
  templateUrl: './cadastro-de-disciplina.component.html',
  styleUrls: ['./cadastro-de-disciplina.component.css']
})
export class CadastroDeDisciplinaComponent implements OnInit {
  id = null;
  codigo = null;
  nome = null;
  descricao = null;
  cadastro_ok = false;
  cadastro_erro = false;
  atualizar_ok = false;
  atualizar_erro = false;

  constructor(private disciplinasService: DisciplinasService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    if (this.id) {
      this.disciplinasService.getDisciplina(this.id)
        .subscribe(disciplina => {
          this.nome = disciplina.nome;
          
        });
    }
  }

  salvar() {
    if (this.id) {
      this.disciplinasService.updateDisciplina(this.id, this.nome)
        .subscribe(disciplina => {
            this.atualizar_ok = true;
            this.atualizar_erro = false;
          },
          erro => {
            this.atualizar_ok = false;
            this.atualizar_erro = true;
          });
    } else {
      this.disciplinasService.addDisciplina(this.nome)
        .subscribe(disciplina => {
            console.log(disciplina);
            this.cadastro_ok = true;
            this.cadastro_erro = false;
            this.nome = null;
            
          },
          erro => {
            this.cadastro_ok = false;
            this.cadastro_erro = true;
          });
    }
  }

}
