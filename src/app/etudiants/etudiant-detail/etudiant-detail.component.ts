import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Etudiant } from 'src/app/models/etudiant.model';
import { EtudiantsService } from 'src/app/services/etudiants.service';

@Component({
  selector: 'app-etudiant-detail',
  templateUrl: 'etudiant-detail.component.html'
})

export class EtudiantDetailComponent implements OnInit {

  etudiant : Etudiant | undefined;

  constructor(private route: ActivatedRoute, private etudiantService: EtudiantsService) { }

  ngOnInit() {
    const routeParam = this.route.snapshot.paramMap;
    const etd = routeParam.get('ePrenom');

    this.etudiant = this.etudiantService.etudiants.find((e) => e.prenom === etd);

  }
}
