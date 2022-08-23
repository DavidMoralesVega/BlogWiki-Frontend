import { Component, Inject, OnInit } from '@angular/core';
import { Category, Post, DialogPost, Pagination } from '../../../../../../core/models';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoryService } from '../../../../../../core/services/category.service';
import { SnackBarService } from '../../../../../../core/services/mat-snack-bar.service';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { PostService } from '../../../../../../core/services/post.service';

@Component({
  selector: 'app-post-update',
  templateUrl: './post-update.component.html',
  styleUrls: ['./post-update.component.scss']
})
export class PostUpdateComponent implements OnInit {

  public GetPost?: Post;

  public formAdd: FormGroup = new FormGroup({});
  public ListCategories: Category[] = [];

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '70vh',
    minHeight: '0',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Introducir la noticia aquí...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' },
      { class: 'readex-pro', name: 'Readex Pro' },
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    uploadUrl: 'v1/image',
    // upload: (file: File) => { ... },
    uploadWithCredentials: false,
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      ['bold', 'italic'],
      ['fontSize']
    ]
  };

  constructor(
    public dialogRef: MatDialogRef<PostUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogPost: DialogPost,
    private readonly categoryService: CategoryService,
    private readonly postService: PostService,
    private readonly snackBarService: SnackBarService
  ) { }

  ngOnInit(): void {
    this.findAllCategories();
    this.GetPost = this.dialogPost.post;
    this.initForm();
  }

  initForm(): void {
    this.formAdd = new FormGroup({
      PTitle: new FormControl(this.GetPost?.PTitle, [Validators.required]),
      PSummary: new FormControl(this.GetPost?.PSummary, [Validators.required]),
      PDescription: new FormControl(this.GetPost?.PDescription, [Validators.required]),
      PPlace: new FormControl(this.GetPost?.PPlace, [Validators.required]),
      PRegisterDateTime: new FormControl(this.GetPost?.PRegisterDateTime, [Validators.required]),
      IdCategory: new FormControl(this.GetPost?.Category?.IdCategory, [Validators.required]),
    });
  }

  findAllCategories() {
    const pagination: Pagination = {
      limit: 100,
      offset: 0
    };

    this.categoryService.findAll(pagination)
      .subscribe((categories: Category[]) => {
        this.ListCategories = categories;
      });
  }

  addData(): void {

    if (this.formAdd.invalid) return;

    let post: Post = {
      PTitle: this.formAdd.value.PTitle,
      PSummary: this.formAdd.value.PSummary,
      PDescription: this.formAdd.value.PDescription,
      PPlace: this.formAdd.value.PPlace,
      PRegisterDateTime: this.formAdd.value.PRegisterDateTime,
      IdCategory: this.formAdd.value.IdCategory,
    };

    this.postService.update(this.GetPost?.IdPost, post).subscribe({
      next: (category: Category) => this.snackBarService.ShowMessage('success', 'Noticia guardada'),
      error: (e) => this.snackBarService.ShowMessage('error', 'La noticia ya existe'),
      complete: () => this.dialogRef.close(),
    });

  }


}
