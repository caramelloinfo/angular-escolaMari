import { Component, OnInit } from '@angular/core';
import {FuncoesService} from "../funcoes.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-funcao',
  templateUrl: './funcao.component.html',
  styleUrls: ['./funcao.component.css']
})
export class FuncaoComponent implements OnInit {
  funcao;
  
    constructor(private funcoesService: FuncoesService,
                private route: ActivatedRoute,
                private router: Router) {
    }
  
    ngOnInit() {
      const id = parseInt(this.route.snapshot.paramMap.get('id'));
      this.funcoesService.getFuncao(id)
        .subscribe(funcao => this.funcao = funcao);
    }

}