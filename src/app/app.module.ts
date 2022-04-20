import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FooterComponent } from './posts-bootstrap/footer/footer.component';
import { HeaderComponent } from './posts-bootstrap/header/header.component';
import { PostItemComponent } from './posts-bootstrap/post-list/post-item/post-item.component';
import { PostListComponent } from './posts-bootstrap/post-list/post-list.component';
import { PostNewComponent } from './posts-bootstrap/post-list/post-new/post-new.component';
import { PostsOverviewBtsComponent } from './posts-bootstrap/posts-overview-bts.component';
import { HeaderMatComponent } from './posts-materials/header-mat/header-mat.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { MatSliderModule } from '@angular/material/slider';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import { PostsOverviewMatComponent } from './posts-materials/posts-overview-mat.component';
import { PostNewMatComponent } from './posts-materials/post-new/post-new-mat.component';
import { EtudiantsComponent } from './etudiants/etudiants.component';
import { Header2Component } from './etudiants/header/header.component';
import { EtudiantsListComponent } from './etudiants/etudiants-list/etudiants-list.component';
import { EtudiantAddComponent } from './etudiants/etudiant-add/etudiant-add.component';
import { AproposComponent } from './etudiants/apropos/apropos.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EtudiantDetailComponent } from './etudiants/etudiant-detail/etudiant-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostItemComponent,
    HeaderComponent,
    FooterComponent,
    PostNewComponent,
    HeaderMatComponent,
    PostsOverviewBtsComponent,
    PostsOverviewMatComponent,
    PostNewMatComponent,

    EtudiantsComponent,
    Header2Component,
    EtudiantsListComponent,
    EtudiantAddComponent,
    AproposComponent,
    EtudiantDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatExpansionModule,
    MatSnackBarModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
