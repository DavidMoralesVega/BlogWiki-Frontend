import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/core/models/user.model';
import { UserAddComponent } from '../components/user-add/containers/user-add.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { AuthService } from '../../../../core/services/auth.service';
import { Pagination } from '../../../../core/models/pagination.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {

  ListUsers: User[] = [];

  displayedColumns: string[] = ['IdUser', 'UEmail', 'UFullName', 'UIsActive', 'URoles', 'Actions'];

  dataSource!: MatTableDataSource<User>;

  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;

  constructor(
    private readonly matDialog: MatDialog,
    private readonly authService: AuthService
  ) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {

    const pagination: Pagination = {
      limit: 100,
      offset: 0
    };

    this.authService.findAll(pagination).subscribe((result: any) => {

      this.ListUsers = result;
      this.dataSource = new MatTableDataSource(this.ListUsers);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    });

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openUserAdd(): void {
    const dialogRef = this.matDialog.open(UserAddComponent, {
      width: '550px',
      height: '55vh',
      maxWidth: '95%'
    });
    dialogRef.afterClosed().subscribe(() => this.findAll());
  }
}
