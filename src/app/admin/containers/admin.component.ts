import { MediaMatcher } from '@angular/cdk/layout';
import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import {
  OptionSidenavAdmin,
  OptionSidenavClient,
} from 'src/app/core/constants/app.route-names';
import { User } from 'src/app/core/models';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { TokenService } from '../../core/services/token.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit, OnDestroy {
  mobileQuery: MediaQueryList;

  private OptionSidenavClient = OptionSidenavClient;
  private OptionSidenavAdmin = OptionSidenavAdmin;

  public OptionSidenav: any = OptionSidenavAdmin;

  isExpanded: boolean = false;

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  private _mobileQueryListener: () => void;

  public User?: User;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private readonly authService: AuthService,
    private readonly tokenService: TokenService,
    private readonly router: Router,
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  ngOnInit(): void {
    this.authService.checkAuthStatus()
      .subscribe((user: User) => {
        this.User = user;
      });


    // this.OptionSidenav =
    //   this.User?.URole === 'Admin'
    //     ? this.OptionSidenavAdmin
    //     : this.OptionSidenavClient;
  }

  logout(): void {
    this.tokenService.logOut();
    this.router.navigate(['/iniciar-sesion']);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
