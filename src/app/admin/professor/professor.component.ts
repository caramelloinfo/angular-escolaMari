import { Component, OnInit } from '@angular/core';
import {ProfessoresService} from "../professores.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent implements OnInit {
  professor;
  
    constructor(private professoresService: ProfessoresService,
                private route: ActivatedRoute,
                private router: Router) {
    }
  
    ngOnInit() {
      const id = parseInt(this.route.snapshot.paramMap.get('id'));
      this.professoresService.getProfessor(id)
        .subscribe(professor => this.professor = professor);
    }

}