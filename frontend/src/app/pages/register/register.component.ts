import { Component, OnDestroy, OnInit } from '@angular/core'
import { Validators, FormBuilder } from '@angular/forms'
import { Router } from '@angular/router'
import { Subject, takeUntil, catchError, throwError } from 'rxjs'
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit, OnDestroy {
  registrationForm = this.fb.group({
    firstName: ['', { validators: Validators.required }],
    lastName: ['', { validators: Validators.required }],
    username: ['', { validators: Validators.required }],
    password: ['', { validators: Validators.required }],
    confirmPassword: ['', { validators: Validators.required }]
  })

  registrationError = ''

  private destroyed$ = new Subject<void>()

  constructor(
    protected fb: FormBuilder,
    private authSrv: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registrationForm.valueChanges.pipe(takeUntil(this.destroyed$)).subscribe(() => {
      this.registrationError = ''
    })
  }

  ngOnDestroy(): void {
    this.destroyed$.next()
    this.destroyed$.complete()
  }

  signUp() {
    if (this.registrationForm.valid) {
      const { firstName, lastName, username, password } = this.registrationForm.value
      this.authSrv
        .register(firstName!, lastName!, username!, password!)
        .pipe(
          catchError((err) => {
            this.registrationError = err.error.message
            return throwError(() => err)
          })
        )
        .subscribe(() => {
          this.router.navigate(['/login'])
        })
    }
  }
}
