import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-item',
  templateUrl: 'post-item.component.html'
})

export class PostItemComponent implements OnInit {

  @Input()
  post!: Post;

  @Input()
  enableDontLike! : boolean;

  @Input()
  idPost! : number;

  constructor(private postsService: PostsService) { }

  ngOnInit() { }

  likeIt() {
    this.postsService.posts[this.idPost].loveIT++;
  }

  dontLikeIt() {
    this.postsService.posts[this.idPost].loveIT--;
  }
}
