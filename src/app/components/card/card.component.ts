import { Component, Input } from '@angular/core';
import { IPost } from '../../models/post.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})
export class CardComponent {

 @Input() post!: IPost;

@Input() posts: IPost[]=[{
  userName: '',
    userImage: '',
    postDescription: '',
    postImage: '',
    isLiked: false,
    comment:'',
    id:-1
}];

  onPostLiked(post: IPost) {
    console.log('Liked post:', post);
  }
  onDeletePost(postId: number) {
    console.log('Deleting post with ID:', postId);
  }
 }
