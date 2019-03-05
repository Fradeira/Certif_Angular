import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() alone_post: Array<PostListItemComponent>;

  constructor() { }

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
    this.alone_post['loveIts']++;
  }

  removeLove() {
    this.alone_post['loveIts']--;
  }

}
