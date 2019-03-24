import {Component, OnDestroy, OnInit} from '@angular/core';
import {PostsService} from '../services/posts.service';
import {Post} from '../models/Post.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {

  postsSubscription: Subscription;
  tabPosts: Post[] = [];

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postsService.postSubject.subscribe(
      (posts: any[]) => {
        this.tabPosts = posts;
      }
    );
    this.postsService.emitPost();
  }

  ngOnDestroy() {
    if(this.postsSubscription) {
      this.postsSubscription.unsubscribe();
    }
  }

}
