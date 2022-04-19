import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';

@Injectable({providedIn: 'root'})
export class PostsService {
  posts = [
    new Post(1, 'Post1', 'Voila un premier post', new Date(), 1),
    new Post(2, 'Post2', 'Voila un deuxieme post', new Date(), -2),
    new Post(3, 'Post3', 'Voila un troisième post', new Date(),0),
  ];

  constructor() { }


}
