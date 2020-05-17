import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  authoForm: FormGroup;

  configs = {
    isSignin: true,
    action: 'login',
    actionChange: 'Create account'
  }
  private nameControl = new FormControl('', [Validators.required, Validators. minLength(3)]);

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    this.authoForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    
  }
  get name(): FormControl {
    return <FormControl>this.authoForm.get('name'); 
  }
    get email(): FormControl {
      return <FormControl>this.authoForm.get('email'); 
    }
    get password(): FormControl {
      return <FormControl>this.authoForm.get('password'); 
    }

    changeAuthAction(): void {
      this.configs.isSignin = !this.configs.isSignin;
      const { isSignin } = this.configs;
      this.configs.action = isSignin ? 'Login' : 'Sign up';
      this.configs.actionChange = isSignin ? 'Create account' : 'Already have account';
      !isSignin
        ? this. authoForm.addControl('name', this.nameControl)
        : this.authoForm.removeControl('name');
    }

  onSubmit(): void {
    console.log('AuthForm' , this.authoForm.value);
  }
}
