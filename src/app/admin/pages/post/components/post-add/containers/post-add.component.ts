import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { SnackBarService } from 'src/app/core/services/mat-snack-bar.service';
import { CategoryService } from '../../../../../../core/services/category.service';
import { Category, Pagination } from '../../../../../../core/models';
import { PostService } from '../../../../../../core/services/post.service';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.scss']
})

export class PostAddComponent implements OnInit {

  public formAdd: FormGroup = new FormGroup({});
  selectedFiles?: any;
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
    private readonly categoryService: CategoryService,
    private readonly postService: PostService,
    private readonly dialogRef: MatDialogRef<PostAddComponent>,
    private readonly snackBarService: SnackBarService) {

  }

  ngOnInit(): void {
    this.initForm();
    this.findAllCategories();
  }

  initForm(): void {
    this.formAdd = new FormGroup({
      PTitle: new FormControl('', [Validators.required]),
      PSummary: new FormControl('', [Validators.required]),
      PDescription: new FormControl('', [Validators.required]),
      PPlace: new FormControl('', [Validators.required]),
      PRegisterDateTime: new FormControl('', [Validators.required]),
      IdCategory: new FormControl('', [Validators.required]),
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

    let post = new FormData();
    post.append('file', this.selectedFiles.item(0));
    post.append('PTitle', this.formAdd.value.PTitle);
    post.append('PSummary', this.formAdd.value.PSummary);
    post.append('PDescription', this.formAdd.value.PDescription);
    post.append('PPlace', this.formAdd.value.PPlace);
    post.append('PRegisterDateTime', this.formAdd.value.PRegisterDateTime);
    post.append('IdCategory', this.formAdd.value.IdCategory);

    this.postService.create(post).subscribe({
      next: (category: Category) => this.snackBarService.ShowMessage('success', 'Noticia creada'),
      error: (e) => this.snackBarService.ShowMessage('error', 'La noticia ya existe'),
      complete: () => this.dialogRef.close(),
    });

  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }
}
