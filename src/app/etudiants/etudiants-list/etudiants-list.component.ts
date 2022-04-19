import { Component, OnInit } from '@angular/core';
import { Etudiant } from 'src/app/models/etudiant.model';
import { EtudiantsService } from 'src/app/services/etudiants.service';

@Component({
  selector: 'app-etudiants-list',
  templateUrl: 'etudiants-list.component.html'
})

export class EtudiantsListComponent implements OnInit {

  etudiants : Etudiant[] = [];

  // injection de service
  constructor(private etudiantsService: EtudiantsService) {

  }

  ngOnInit() {
    this.etudiants = this.etudiantsService.etudiants;
    // this.etudiantsService.getListEtudiants();
    // this.etudiantsService.etudiantsUpdated
    //   .subscribe((e: Etudiant[]) => {
    //     this.etudiants = e;
    //   });
   }
}

