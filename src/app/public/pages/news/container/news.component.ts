import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PostService } from '../../../../core/services/post.service';
import { Post } from '../../../../core/models/post.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  private TermPost: string = '';
  public post?: Post;
  public PostCategory?: Post[] = [];

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly postService: PostService,
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((params: Params) => {
      this.TermPost = params['Term'];
      this.findOne();
    });

  }

  findOne() {
    this.postService.findOne(this.TermPost).subscribe((post: Post) => {
      this.post = post;
      this.PostCategory = post.Category?.Post || [];
      console.log(post);
      console.log('ssss', this.PostCategory);

    })
  }

}
