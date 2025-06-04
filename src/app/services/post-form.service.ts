import { Injectable } from '@angular/core';
import { IPost } from '../models/post.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostFormService {

  private postsSubject = new BehaviorSubject<IPost[]>([
    {
      userName: "Salma Zoroub",
      userImage: "../../assets/postImg.png",
      postDescription: "Enjoying the beautiful sunset!",
      postImage: "../../assets/postImg.png",
      isLiked: false,
      id: 1,
      createdAt: new Date(Date.now())
    },
    {
      userName: "Mimi Ezz",
      userImage: "../../assets/postImg.png",
      postDescription: "Exploring the beaut.",
      postImage: "../../assets/postImg.png",
      isLiked: false,
      id: 2,
      createdAt: new Date(Date.now())
    },
    {
      userName: "Salma Ezz",
      userImage: "../../assets/postImg.png",
      postDescription: "Enjoy your day",
      postImage: "../../assets/postImg.png",
      isLiked: false,
      id: 3,
      createdAt: new Date(Date.now())
    }
  ]);

  posts$: Observable<IPost[]> = this.postsSubject.asObservable();

  constructor() { }

  getPosts(): IPost[] {
    return this.postsSubject.getValue();
  }

  createPost(newPost: Omit<IPost, 'id' | 'isLiked' | 'createdAt'>): void {
    const currentPosts = this.postsSubject.getValue();
    const maxId = currentPosts.length ? Math.max(...currentPosts.map(p => p.id)) : 0;
    const postToAdd: IPost = {
      ...newPost,
      id: maxId + 1,
      isLiked: false,
      createdAt: new Date()
    };
    this.postsSubject.next([...currentPosts, postToAdd]);
  }

  deletePost(postId: number): void {
    const currentPosts = this.postsSubject.getValue();
    const updatedPosts = currentPosts.filter(post => post.id !== postId);
    this.postsSubject.next(updatedPosts);
  }

  toggleLike(postId: number): void {
    const currentPosts = this.postsSubject.getValue();
    const updatedPosts = currentPosts.map(post =>
      post.id === postId ? { ...post, isLiked: !post.isLiked } : post
    );
    this.postsSubject.next(updatedPosts);
  }

  }


