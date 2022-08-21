import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../../core/services/category.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Category, Post } from '../../../../core/models';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  private TermPost: string = '';
  public category?: Category;
  public posts?: Post[];

  constructor(
    private readonly categoryService: CategoryService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.TermPost = params['Term'];
      this.findOne();
    });
  }

  findOne() {
    this.categoryService.findOne(this.TermPost).subscribe((category: Category) => {
      this.posts = category.Post;
      this.category = category;
      console.log(this.posts);
      console.log(this.category);

    })
  }

  navigateNews(post: Post) {

    this.router.navigate([`noticia/${post.IdPost}`]);
    console.log(post);

  }

}
