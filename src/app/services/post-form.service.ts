import { Injectable } from '@angular/core';
import { IPost } from '../models/post.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PostFormService {

  posts:IPost[]=[
      {
    userName: "Salma Zoroub",
    userImage:"../assets/postImg.png",
    postDescription: "bla bla bla",
    postImage: "../assets/postImg.png",
    isLiked: false,
    id:1
    },
    {
    userName: " mimi ezz",
    userImage:"../assets/postImg.png",
    postDescription: "la la la ",
    postImage: "../assets/postImg.png",
    isLiked: false,
    id:2,
    },
    {
    userName: "salma ezz",
    userImage:"assets/postImg.png",
    postDescription: "ha ha ha",
    postImage: "assets/postImg.png",
    isLiked: false,
    id:3
    }
  ]
   postForm= new FormGroup({
    "userName":new FormControl("",Validators.required),
    "userImage":new FormControl("",Validators.required),
    "postDescription":new FormControl("",Validators.required),
    "postImage":new FormControl("",Validators.required),
  });

  onSumbit(){}
  createPost(newPost:IPost)
  {
    this.posts.push(newPost)
  }
}
