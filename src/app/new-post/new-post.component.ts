import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {PostsService} from '../services/posts.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  nPost: FormGroup;

  constructor(private formBuilder: FormBuilder, private postService: PostsService, private route: Router) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.nPost = this.formBuilder.group({
      'title': ['', Validators.required],
      'content': ['', Validators.required]
    });
  }

  postSubmit() {
    this.postService.newPost(this.nPost.getRawValue());

    this.route.navigate(['/posts']);
  }

}
