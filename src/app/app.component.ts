import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  genders = ['male', 'female', 'others'];
  signupForm: FormGroup;

  ngOnInit(){
    this.signupForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'gender': new FormControl('male')
    })
    this.signupForm.setValue({
      'username': 'Superuser',
      'email': 'super@test.com',
      'gender': 'male'
    })
  }

  

  onSubmit(){
    console.log(this.signupForm);
    this.signupForm.reset();
  }
}
