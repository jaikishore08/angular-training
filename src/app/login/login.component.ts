import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation, SimpleChanges, OnChanges, DoCheck, ContentChild } from '@angular/core';
import { AppService } from '../app.service';
import { HomeComponent } from '../home/home.component';
import { Post } from './model';

@Component({
  selector: 'app-child',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  posts: Post[] = [];
  post: Post;
  constructor(public appService: AppService) {
    console.log("child component constructor initialized");
   }

  ngOnInit() {
    console.log("child component init method called");
    this.getPosts();
  }

  getPosts() {
    this.appService.getPosts().subscribe(data => {
      this.posts = data;
       // this.posts = this.posts.slice(0, 10);
    });
  }

  getPostById(id: number) {
    this.appService.getPostById(id).subscribe(data => {
        this.post = data;
    });
  }

  getPostByUserId(userId: number) {
    this.appService.getPostByUserId(userId).subscribe(data => {
      this.posts = data;
    })
  }

  addPost() {
    let post: Post = {
      userId: 1,
      title: "my post",
      body: "my body"
    }

    this.appService.addPost(post).subscribe(data => {
      this.post = post
    });
  }

  hasChanges() {
    return true;
  }

}
