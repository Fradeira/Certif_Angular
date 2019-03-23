import { Injectable } from '@angular/core';
import {Post} from '../models/Post.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  date = new Date();

  posts: Post[] = [
      {
      title: 'Blabla',
      content: 'dl;qiwjeoqwibe;ioq wj;oeiuqwi;o eub;qiwue;bioqwube;oqiuwe;o uqwibeb u;qwinue;oqwub eq',
      loveIts: 0,
      created_at: this.date
      },
      {
        title: 'Blabla 2',
        content: 'dl;qiwjeoqwibe;ioq wj;oeiuqwi;o eub;qiwue;bioqwube;oqiuwe;o uqwibeb u;qwinue;oqwub eq',
        loveIts: 1,
        created_at: this.date
      },
      {
        title: 'Blabla 3',
        content: 'dl;qiwjeoqwibe;ioq wj;oeiuqwi;o eub;qiwue;bioqwube;oqiuwe;o uqwibeb u;qwinue;oqwub eq',
        loveIts: 2,
        created_at: this.date
      }
    ];
  postSubject = new Subject<Post[]>();

  constructor() { }

  emitPost() {
    this.postSubject.next(this.posts);
  }

  newPost(newPost: Post) {
    this.posts.push(newPost);
    this.emitPost();
  }

  deletePost(i: number) {
    this.posts.splice(i, 1);
  }
}
