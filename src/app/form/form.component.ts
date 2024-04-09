import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { noHomeroValidator } from '../utils/validators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.userForm = this.formBuilder.group({
      name: this.formBuilder.control('', [noHomeroValidator]),
      lastName: this.formBuilder.control(''),
      email: this.formBuilder.control('', [Validators.email ,Validators.required]),
      password: this.formBuilder.control('', [Validators.required]),
    })
  }

  get emailControl(){
    return this.userForm.get('email');
  }
  get passwordControl(){
    return this.userForm.get('password');
  }
  get nameControl(){
    return this.userForm.get('name');
  }
  
  onSubmit(): void{
    alert('usuario creado' + JSON.stringify(this.userForm.value))
  }
  
}
