import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ListDepartment } from 'src/app/core/constants/app.route-names';
import { User } from 'src/app/core/models';
import { SnackBarService } from 'src/app/core/services/mat-snack-bar.service';
import { AuthService } from '../../../../../../core/services/auth.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss'],
})
export class UserAddComponent implements OnInit {
  public formAdd: FormGroup = new FormGroup({});
  public Departaments = ListDepartment;

  constructor(
    public dialogRef: MatDialogRef<UserAddComponent>,
    private snackBarService: SnackBarService,
    private authService: AuthService,
    ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.formAdd = new FormGroup({
      UEmail: new FormControl('', [Validators.required]),
      UPassword: new FormControl('', [Validators.required]),
      UFullName: new FormControl('', [Validators.required]),
    });
  }

  addData(): void {

    if (this.formAdd.invalid) return;

    this.authService.createUser(this.formAdd.value).subscribe({
      next: (user: User) => this.snackBarService.ShowMessage('success', 'Usuario creado'),
      error: (e) => this.snackBarService.ShowMessage('error', 'El usuario ya existe'),
      complete: () => this.dialogRef.close(),
    });

  }
}
