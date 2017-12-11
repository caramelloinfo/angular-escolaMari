import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EscolaService } from '../escola.service';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.css']
})
export class RelatorioComponent implements OnInit {
  frequencias = [];
  frequencia: any[];

  constructor(private escolaService: EscolaService,
    private router: Router) { }

  ngOnInit() {
    this.escolaService.getFrequencias()
      .subscribe(frequencias => this.frequencias = frequencias)
     
  }

}
