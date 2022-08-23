import { Component, OnInit, ViewChild } from '@angular/core';
import { Category, Pagination, Post } from '../../../../core/models';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { PostService } from '../../../../core/services/post.service';
import { PostAddComponent } from '../components/post-add/containers/post-add.component';
import { PostUpdateComponent } from '../components/post-update/containers/post-update.component';
import { PostDeleteComponent } from '../components/post-delete/containers/post-delete.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})

export class PostComponent implements OnInit {

  private ListPosts: Post[] = [];

  public displayedColumns: string[] = ['IdPost', 'PPhoto', 'PTitle', 'CDescription', 'UFullName', 'PPlace', 'PRegisterDateTime', 'Actions'];

  public dataSource!: MatTableDataSource<Post>;

  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;

  constructor(
    private readonly postService: PostService,
    private readonly matDialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    const pagination: Pagination = {
      limit: 100,
      offset: 0
    };

    this.postService.findAll(pagination)
      .subscribe((posts: Post[]) => {
        this.ListPosts = posts;
        this.dataSource = new MatTableDataSource(this.ListPosts);

        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    };
  }

  openAdd(): void {
    const dialogRef = this.matDialog.open(PostAddComponent, {
      width: '90%',
      height: '90vh',
      maxWidth: '90%'
    });

    dialogRef.afterClosed().subscribe(() => this.findAll());
  }

  openUpdate(post: Post): void {
    const dialogRef = this.matDialog.open(PostUpdateComponent, {
      width: '90%',
      height: '90vh',
      maxWidth: '90%',
      data: { post },
    });
    dialogRef.afterClosed().subscribe(() => this.findAll());
  }

  openDelete(post: Post): void {

    const dialogRef = this.matDialog.open(PostDeleteComponent, {
      width: '550px',
      height: '35vh',
      maxWidth: '95%',
      data: { post },
    });
    dialogRef.afterClosed().subscribe(() => this.findAll());
  }


}
