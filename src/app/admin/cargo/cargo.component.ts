import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {CargosService} from '../cargos.service';
import {Cargo} from '../cargo.model';

@Component({
  selector: 'app-cargo',
  templateUrl: './cargo.component.html',
  styleUrls: ['./cargo.component.css']
})
export class CargoComponent implements OnInit {
  cargo: Cargo;
  

  constructor(private cargosService: CargosService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.cargosService.getCargo(id)
      .subscribe(cargo => this.cargo = cargo,
        erro => this.router.navigate(['cargo-nao-encontrado']));
  }

}
