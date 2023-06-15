import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private builder:FormBuilder, private toastr:ToastrService){

  }
registerForm= this.builder.group({
  id:this.builder.control('',Validators.compose([Validators.required,Validators.minLength(5)])),
  name:this.builder.control('',Validators.required),
  password:this.builder.control('',Validators.compose([Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')])),
  email:this.builder.control('',Validators.compose([Validators.required,Validators.email])),
  gender:this.builder.control('male'),
  role:this.builder.control(''),
  isActive:this.builder.control(false)
})

registration(){
  if(this.registerForm.valid){

  }else{
    this.toastr.warning('Por favor, insira dados válidos"')
  }
}

}

