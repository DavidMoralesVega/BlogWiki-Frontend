import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../../core/services/post.service';
import { CategoryService } from 'src/app/core/services/category.service';
import { Pagination, Post } from 'src/app/core/models';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public posts: Post[] = [];

  public postsCarousel: Post[] = [];

  options1: any;
  constructor(
    private readonly postService: PostService,
    private readonly categoryService: CategoryService,
    private readonly router: Router
  ) {

  }

  ngOnInit(): void {

    this.findAllPostsCarousel();
    this.findAllPostsHome();


  }

  findAllPostsHome() {
    const pagination: Pagination = {
      limit: 10,
      offset: 0
    };

    this.postService.findAll(pagination).subscribe((posts: Post[]) => {
      this.posts = posts;
      console.log(posts);

    });
  }
  findAllPostsCarousel() {



    const pagination: Pagination = {
      limit: 10,
      offset: 0
    };

    this.postService.findAll(pagination).subscribe((posts: Post[]) => {

      this.postsCarousel = posts;
      console.log(posts);


    });
  }


  navigateNews(post: Post) {

    this.router.navigate([`noticia/${post.IdPost}`]);
    console.log(post);

  }






}
