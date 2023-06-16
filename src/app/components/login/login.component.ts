import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  emailData:any;
  constructor(
    private builder: FormBuilder,
    private toastr: ToastrService,
    private service: AuthService,
    private router: Router
  ) {}

  loginForm = this.builder.group({
    password: this.builder.control('', Validators.required),
    email: this.builder.control('', Validators.required),
  });

  login(){
    this.service.getById(this.loginForm.value.email).subscribe(res=>{

      console.log(this.emailData)
      if(this.emailData.password === this.loginForm.value.password){
        if(this.emailData.isActive){
          sessionStorage.setItem
        }
      }
    })
  }
}
