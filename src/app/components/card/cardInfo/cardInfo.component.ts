import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPost } from '../../../models/post.model';

@Component({
  selector: 'app-cardInfo',
  templateUrl: './cardInfo.component.html',
  styleUrl: './cardInfo.component.css'
})
export class CardInfoComponent {
@Input() posts?:IPost
@Output() postIsLiked=new EventEmitter<IPost>()
onClick(){
  if(this.posts){
  this.posts.isLiked=!this.posts.isLiked
this.postIsLiked.emit(this.posts);
}
}
}



