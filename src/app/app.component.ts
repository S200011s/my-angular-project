import { Component } from '@angular/core';
import { IPost } from './models/post.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
   
  formShown=false;
  toggleForm() {
    this.formShown = !this.formShown;
  }
  onAddNewPost(newPost: IPost) {
    const maxId = this.posts.length ? Math.max(...this.posts.map(p => p.id)) : 0;
    newPost.id = maxId + 1;

    this.posts.push(newPost);

    this.formShown = false;
  }
}
