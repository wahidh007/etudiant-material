import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post.model';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: 'post-list.component.html'
})

export class PostListComponent implements OnInit {

  posts!: Post[];

  activerDontLike : boolean = false;

  // injection du service PostsService
  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.posts = this.postsService.posts;
  }

  desactiverDontLike() {
    this.activerDontLike = !this.activerDontLike;
  }
}
