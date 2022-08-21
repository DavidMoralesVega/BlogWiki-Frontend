import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoryService } from '../../../../core/services/category.service';
import { Category, Pagination } from '../../../../core/models';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

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

  constructor(private readonly categoryService: CategoryService) { }

  ngOnInit(): void {
    console.log('categoria module');

    const pagination: Pagination = {
      limit: 10,
      offset: 0
    };

    this.categoryService.findAll(pagination)
      .subscribe((categories: Category[]) => {
        console.log(categories);

        this.ListCategories = categories;
        this.dataSource = new MatTableDataSource(this.ListCategories);

        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });

  }

}
