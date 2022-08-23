import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoryService } from '../../../../core/services/category.service';
import { Category, Pagination } from '../../../../core/models';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { CategoryAddComponent } from '../components/category-add/containers/category-add.component';
import { CategoryUpdateComponent } from '../components/category-update/containers/category-update.component';
import { CategoryDeleteComponent } from '../components/category-delete/containers/category-delete.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  private ListCategories: Category[] = [];

  public displayedColumns: string[] = ['IdCategory', 'CPhoto', 'CDescription', 'Actions'];

  public dataSource!: MatTableDataSource<Category>;

  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;

  constructor(
    private readonly categoryService: CategoryService,
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

    this.categoryService.findAll(pagination)
      .subscribe((categories: Category[]) => {
        this.ListCategories = categories;
        this.dataSource = new MatTableDataSource(this.ListCategories);

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
    const dialogRef = this.matDialog.open(CategoryAddComponent, {
      width: '550px',
      height: '40vh',
      maxWidth: '95%'
    });

    dialogRef.afterClosed().subscribe(() => this.findAll());
  }

  openUpdate(category: Category): void {
    const dialogRef = this.matDialog.open(CategoryUpdateComponent, {
      width: '550px',
      height: '40vh',
      maxWidth: '95%',
      data: { category },
    });
    dialogRef.afterClosed().subscribe(() => this.findAll());
  }

  openDelete(category: Category): void {
    const dialogRef = this.matDialog.open(CategoryDeleteComponent, {
      width: '550px',
      height: '35vh',
      maxWidth: '95%',
      data: { category },
    });
    dialogRef.afterClosed().subscribe(() => this.findAll());
  }


}
