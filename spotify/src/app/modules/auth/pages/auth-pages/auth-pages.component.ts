import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@modules/auth/services/auth.service';

@Component({
  selector: 'app-auth-pages',
  templateUrl: './auth-pages.component.html',
  styleUrls: ['./auth-pages.component.css']
})
export class AuthPagesComponent implements OnInit {

  formLogin: FormGroup = new FormGroup ({})

  constructor(private authServices: AuthService) {}

  ngOnInit(): void {
    this.formLogin = new FormGroup(
      {
        email: new FormControl('',[
          Validators.required,
          Validators.email,
          Validators.minLength(4)
        ]),
        password: new FormControl('',[
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(12)
        ]

        )
      }
    )
    
  }

  sendLogin(): void {
    const {email, password} = this.formLogin.value
    this.authServices.sendCredentials(email, password)
  }

}
