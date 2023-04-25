import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [],
})
export class RegisterComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router:Router) {}

  ngOnInit(): void {
    console.log('app works');
    this.initForm();
  }

  initForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    console.log(this.loginForm.value);
    const { email, password } = this.loginForm.value;
    this.authService
      .register({ email, password })
      .then((resp) => {
        console.log(resp)
        this.router.navigate(['/login'])

      })
      .catch((err) => console.log(err));
  }
}
