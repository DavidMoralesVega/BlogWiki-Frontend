import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { AuthService } from '../../../../core/services/auth.service';
import { LoginUserInterface } from '../../../../core/models';
import { SnackBarService } from '../../../../core/services/mat-snack-bar.service';
import { TokenService } from '../../../../core/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  public isLoading: boolean = false;
  public eye: boolean = false;
  public formLogin: FormGroup = new FormGroup({});

  private user?: LoginUserInterface;

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private readonly authService: AuthService,
    private readonly snackBarService: SnackBarService,
    private readonly tokenService: TokenService
  ) {

    // (!this.userService.getAuthState) ? this.router.navigate(['./panel']) : '';

  }

  ngOnInit(): void {

    // this.store
    //   .select('ui')
    //   .subscribe((ui: any) => (this.isLoading = ui.loading));

    this.formLogin = new FormGroup({
      UEmail: new FormControl('luzasmartinez@gmail.com', [Validators.required, Validators.email]),
      UPassword: new FormControl('Ru387@Luc1234', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  login() {

    if (this.formLogin.invalid) return;

    this.user = {
      UEmail: this.formLogin.value.UEmail,
      UPassword: this.formLogin.value.UPassword
    };

    this.authService.loginUser(this.user).subscribe({
      next: (user) => this.tokenService.setToken(user.token),
      error: (e) => this.snackBarService.ShowMessage('error', 'Usuario o contraseña incorrectos'),
      complete: () => {
        this.snackBarService.ShowMessage('success', 'Bienvenido');
        this.router.navigate(['/panel']);
      },
    })

  }

  onBlurMethod(e: any) {
    this.formLogin.reset({ UEmail: e.target.value.trim() });
  }

  changeViewPassword(valueEye: boolean) {
    this.eye = valueEye === true ? true : false;
  }

  ngOnDestroy(): void {
    // cleanSubscriptions(this.subscriptions);
  }
}
