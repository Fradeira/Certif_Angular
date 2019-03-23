import {Component, Input, OnInit} from '@angular/core';
import {PostsService} from '../services/posts.service';
import {Post} from '../models/Post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  tabPosts: Post[];

  constructor(private postsService: PostsService) {
    this.tabPosts = this.postsService.posts;
  }

  ngOnInit() {
  }

}
