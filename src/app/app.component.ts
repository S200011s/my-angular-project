import { Component, OnInit, inject } from '@angular/core';
import { IPost } from './models/post.model';
import { PostFormService } from './services/post-form.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  postService = inject(PostFormService);
  posts$!: Observable<IPost[]>;

  formShown = false;

  ngOnInit(): void {
    this.posts$ = this.postService.posts$;
  }

  toggleForm(): void {
    this.formShown = !this.formShown;
  }

  hideForm(): void {
    this.formShown = false;
  }

  }

