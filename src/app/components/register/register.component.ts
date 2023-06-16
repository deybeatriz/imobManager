import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(
    private builder: FormBuilder,
    private toastr: ToastrService,
    private service: AuthService,
    private router: Router
  ) {}
  registerForm = this.builder.group({
    id: this.builder.control(
      '',
      Validators.compose([Validators.required, Validators.minLength(5)])
    ),
    name: this.builder.control('', Validators.required),
    password: this.builder.control(
      '',
      Validators.compose([
        Validators.required,
        Validators.pattern(
          '(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'
        ),
      ])
    ),
    email: this.builder.control(
      '',
      Validators.compose([Validators.required, Validators.email])
    ),
    tel: this.builder.control(
      '',
      Validators.compose([
        Validators.required,
        Validators.pattern(
          '^\\(?(\\d{2})\\)?[-\\s]?(\\d{5}|\\d{4})[-\\s]?(\\d{4})$'
        ),
      ])
    ),
    role: this.builder.control(''),
    isActive: this.builder.control(false),
  });

  registration() {
    if (this.registerForm.valid) {
      this.service.registerData(this.registerForm.value).subscribe((res) => {
        this.toastr.success(
          'Por favor, entre em contato com um Administrador para habilitar seu acesso',
          'Registro realizado com sucesso'
        );
        this.router.navigate(['login']);
      });
    } else {
      this.toastr.warning('Por favor, insira dados válidos');
    }    
  }
}
