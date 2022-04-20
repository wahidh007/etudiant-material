import { Component, NgZone, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Etudiant } from 'src/app/models/etudiant.model';
import { EtudiantsService } from 'src/app/services/etudiants.service';


@Component({
  selector: 'app-etudiant-add',
  templateUrl: 'etudiant-add.component.html'
})

export class EtudiantAddComponent implements OnInit {
  constructor(private etudiantsService: EtudiantsService, private _snackBar: MatSnackBar, private ngZone: NgZone, private router: Router) { }

  ngOnInit() { }

  // addEtudiant(form: NgForm) {
  //   if (form.invalid) {
  //     return;
  //   }

  //   // this.etudiantsService.etudiants.push(new Etudiant(form.value.etdName));
  //   alert('Bonjour ' + form.value.etdName);

  //   // console.log(this.etudiantsService.getListEtudiants());

  //   this.etudiantsService.addEtudiant(new Etudiant(form.value.etdName));

  //     // this.etudiantsService.deleteEtudiant(new Etudiant('Roua')).
  //     //   subscribe(
  //     //     (responseData) => {
  //     //       console.log(responseData.message);
  //     //       this.ngZone.run(() => this.router.navigateByUrl('/etudiants'));
  //     //       // this.etudiants.push(etudiant);
  //     //       // this.emitAppareilSubject();
  //     //   });

  //   // SnakBar
  //   this._snackBar.open("Added successfully !", "Ok");

  //   form.resetForm();
  // }

  addEtudiant(etdForm: NgForm) {
    alert('Bonjour ' + etdForm.value.nomEtudiant);
    this.etudiantsService.addEtudiant(new Etudiant(etdForm.value.nomEtudiant));
  }
}
