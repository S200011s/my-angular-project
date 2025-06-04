import { Component, Input, inject } from '@angular/core';
import { IPost } from '../../models/post.model';
import { PostFormService } from '../../services/post-form.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  postService = inject(PostFormService);

  @Input() post!: IPost;

  onPostLiked(post: IPost): void {
    this.postService.toggleLike(post.id);
  }

  onDeletePost(postId: number): void {
    if (confirm('Are you sure you want to delete this post?')) {
      this.postService.deletePost(postId);
    }
  }
}

