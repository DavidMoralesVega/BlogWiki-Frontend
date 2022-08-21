import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Category, Pagination } from 'src/app/core/models';
import { CategoryService } from 'src/app/core/services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'z-navbar',
  templateUrl: './z-navbar.component.html',
  styleUrls: ['./z-navbar.component.scss']
})
export class ZNavbarComponent implements OnInit {

  public categories: Category[] = [];

  activeLink = this.categories[0];
  background: ThemePalette = undefined;

  constructor(
    private readonly categoryService: CategoryService,
    private readonly router: Router
  ) { }


  ngOnInit(): void {


    const pagination: Pagination = {
      limit: 10,
      offset: 0
    };

    this.categoryService.findAll(pagination).subscribe((categories: Category[]) => {
      this.categories = categories;
      console.log(categories);

    });
  }

  navigateHome(category: Category | 'inicio') {

    if (category === 'inicio') {
      this.router.navigate([`inicio/`]);
    } else {
      this.router.navigate([`categoria/${category.CSlug}`]);
    };

  }

}
