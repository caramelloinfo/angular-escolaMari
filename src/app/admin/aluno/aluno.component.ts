import { Component, OnInit } from '@angular/core';
import {AlunosService} from "../alunos.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {
  aluno;
  
    constructor(private alunosService: AlunosService,
                private route: ActivatedRoute,
                private router: Router) {
    }
  
    ngOnInit() {
      const id = parseInt(this.route.snapshot.paramMap.get('id'));
      this.alunosService.getAluno(id)
        .subscribe(aluno => this.aluno = aluno);
    }

}