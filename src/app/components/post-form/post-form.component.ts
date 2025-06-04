import { Component, Output, EventEmitter, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { PostFormService } from '../../services/post-form.service';
import { IPost } from '../../models/post.model';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  postService = inject(PostFormService);
  @Output() formSubmitted = new EventEmitter<void>();

  postForm!: FormGroup;

  ngOnInit(): void {
    this.postForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      userImage: new FormControl('', Validators.required),
      postDescription: new FormControl('', Validators.required),
      postImage: new FormControl('', Validators.required)
    });
  }

  onSubmit(): void {
    if (this.postForm.valid) {
      const newPostData: Omit<IPost, 'id' | 'isLiked' |'createdAt'> = {
        userName: this.postForm.value.userName,
        userImage: this.postForm.value.userImage,
        postDescription: this.postForm.value.postDescription,
        postImage: this.postForm.value.postImage,
  
      };

      this.postService.createPost(newPostData);
      this.postForm.reset();
      this.formSubmitted.emit();
    } else {
      this.postForm.markAllAsTouched();
      console.error('Form is invalid');
    }
  }
}

