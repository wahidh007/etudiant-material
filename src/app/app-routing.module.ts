import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AproposComponent } from './etudiants/apropos/apropos.component';
import { EtudiantsComponent } from './etudiants/etudiants.component';
import { PostListComponent } from './posts-bootstrap/post-list/post-list.component';
import { PostNewComponent } from './posts-bootstrap/post-list/post-new/post-new.component';

const routes: Routes = [
  // { path:'posts', component: PostListComponent },
  // { path:'postNew', component: PostNewComponent },
  // { path:'', component: PostListComponent },
  { path:'etudiants', component: EtudiantsComponent },
  { path:'apropos', component: AproposComponent },
  { path:'', component: EtudiantsComponent },
  { path:'**', redirectTo: 'etudiants' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
