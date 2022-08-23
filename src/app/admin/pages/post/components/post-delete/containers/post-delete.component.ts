import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogPost, Post } from 'src/app/core/models';
import { SnackBarService } from '../../../../../../core/services/mat-snack-bar.service';
import { PostService } from '../../../../../../core/services/post.service';

@Component({
  selector: 'app-post-delete',
  templateUrl: './post-delete.component.html',
  styleUrls: ['./post-delete.component.scss']
})
export class PostDeleteComponent implements OnInit {

  public GetPost?: Post;

  constructor(
    public dialogRef: MatDialogRef<PostDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogPost: DialogPost,
    private postService: PostService,
    private snackBarService: SnackBarService
  ) { }

  ngOnInit(): void {
    this.GetPost = this.dialogPost.post;
  }

  delete(): void {
    this.postService.delete(this.GetPost?.IdPost || '').subscribe(()=> {
      this.snackBarService.ShowMessage('success', 'Post eliminado')
    });
    this.snackBarService.ShowMessage('success', 'Post eliminado');
    this.dialogRef.close();

  }
}
