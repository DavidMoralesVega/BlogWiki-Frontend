import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/core/models/user.model';
import { UserAddComponent } from '../components/user-add/containers/user-add.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {

  ListUsers: User[] = [];

  displayedColumns: string[] = ['IdUser', 'UName', 'UPaternal', 'UMaternal', 'UIdentity', 'UIdentityPlace', 'UCellular', 'UEmail', 'URole'];

  dataSource!: MatTableDataSource<User>;

  @ViewChild(MatPaginator, {static: false} ) paginator!: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort!: MatSort;

  constructor(public matDialog: MatDialog) {}

  ngOnInit(): void {

    // this.userService.getUsers().subscribe((result: any) => {

    //     this.ListUsers = result;
    //     this.dataSource = new MatTableDataSource(this.ListUsers);

    //     this.dataSource.paginator = this.paginator;
    //     this.dataSource.sort = this.sort;

    // });


  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openUserAdd(): void {
    this.matDialog.open(UserAddComponent, {
      width: '550px',
      height: '95vh',
      maxWidth: '95%'
      // data: { name: this.name, animal: this.animal },
    });
  }
}
