import {Component, Injectable, Input, OnInit} from '@angular/core';
import {PostsService} from '../../services/posts.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
@Injectable()
export class PostListItemComponent implements OnInit {

  @Input() alone_post: Array<PostListItemComponent>;
  @Input() tabIndex: number;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
  }

  getColor() {
    if (this.alone_post['loveIts'] > 0) {
      return 'green';
    } else if (this.alone_post['loveIts'] < 0) {
      return 'red';
    }
  }

  addLove() {
    this.postsService.posts[this.tabIndex]['loveIts']++;
  }

  removeLove() {
    this.postsService.posts[this.tabIndex]['loveIts']--;
  }

  removePost() {
    this.postsService.deletePost(this.tabIndex);
  }

}
