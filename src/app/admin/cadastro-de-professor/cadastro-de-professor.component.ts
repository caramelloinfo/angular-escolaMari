import { Component, OnInit } from '@angular/core';
import {ProfessoresService} from "../professores.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-cadastro-de-professor',
  templateUrl: './cadastro-de-professor.component.html',
  styleUrls: ['./cadastro-de-professor.component.css']
})
export class CadastroDeProfessorComponent implements OnInit {
  id = null;
  nome = null;
  cadastro_ok = false;
  cadastro_erro = false;
  atualizar_ok = false;
  atualizar_erro = false;

  constructor(private professoresService: ProfessoresService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    if (this.id) {
      this.professoresService.getProfessor(this.id)
        .subscribe(professor => {
          this.nome = professor.nome;
          
        });
    }
  }

  salvar() {
    if (this.id) {
      this.professoresService.updateProfessor(this.id, this.nome)
        .subscribe(professor => {
            this.atualizar_ok = true;
            this.atualizar_erro = false;
          },
          erro => {
            this.atualizar_ok = false;
            this.atualizar_erro = true;
          });
    } else {
      this.professoresService.addProfessor(this.nome)
        .subscribe(professor => {
            console.log(professor);
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
