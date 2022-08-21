import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ListDepartment } from 'src/app/core/constants/app.route-names';
import { User } from 'src/app/core/models/user.model';
import { SnackBarService } from 'src/app/core/services/mat-snack-bar.service';

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
    private snackBarService: SnackBarService) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.formAdd = new FormGroup({
      UPaternal: new FormControl('', [Validators.required]),
      UMaternal: new FormControl('', [Validators.required]),
      UName: new FormControl('', [Validators.required]),
      UIdentity: new FormControl('', [Validators.required]),
      UIdentityPlace: new FormControl('5', [Validators.required]),
      UCellular: new FormControl('', [Validators.required]),
      UEmail: new FormControl('', [Validators.required]),
      UPassword: new FormControl('', [Validators.required]),
    });
  }

  addData(): void {

    // if (this.formAdd.valid) {
    //   this.userService
    //     .register(this.formAdd.value.UEmail, this.formAdd.value.UPassword)
    //     .subscribe((resultRegister: any) => {

    //       const NewUser: User = {
    //         ...this.formAdd.value,
    //         URole: 'Agente',
    //       };

    //       this.userService
    //         .onSaveUser(resultRegister.user.uid, NewUser)
    //         .then((result: any) => {


    //           this.dialogRef.close();
    //           this.snackBarService.ShowMessage('success', 'Usuario registrado');


    //         });
    //     });
    // }
  }
}
