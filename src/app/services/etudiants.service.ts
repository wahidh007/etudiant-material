import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Etudiant } from '../models/etudiant.model';

@Injectable({providedIn: 'root'})
export class EtudiantsService {

  etudiants = [
    new Etudiant('Salah'),
    new Etudiant('Amar'),
    new Etudiant('Fatma'),
    new Etudiant('Ali'),
    new Etudiant('Sahar'),
  ];

  constructor() { }

  // etudiants : Etudiant[] = [];

  // etudiantsUpdated = new Subject<Etudiant[]>();

  // constructor(private http: HttpClient) {  }

  // addEtudiant(etudiant: Etudiant) {
  //   return this.http.post<{message: string}>('http://localhost:3003/api/etudiants/', etudiant).
  //   subscribe(
  //     (responseData) => {
  //       console.log(responseData.message);
  //       // this.ngZone.run(() => this.router.navigateByUrl('/etudiants'));
  //       this.getListEtudiants();
  //       // this.etudiants.push(etudiant);
  //       // this.emitAppareilSubject();
  //     }
  //   );
  // }

  // deleteEtudiant(e: Etudiant) {
  //   return this.http.delete<{message: string}>(`http://localhost:3003/api/etudiants/${e.prenom}`);
  // }

  // getListEtudiants() {
  //   this.http.get<{message: string, etudiants: Etudiant[]}>("http://localhost:3003/api/etudiants")
  //     .subscribe(
  //       (data) => {
  //         console.log(data.message + ' wahiiid');
  //         console.log(data.etudiants);
  //         this.etudiants = data.etudiants;
  //         this.etudiantsUpdated.next([...this.etudiants]);
  //       }
  //     );
  // }

}
