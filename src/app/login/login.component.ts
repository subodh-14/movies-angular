import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup : FormGroup
  token :string
  constructor(private authService:AuthServiceService,private router: Router ) { }

  ngOnInit(): void {
    this.initForm();
    
  }
  initForm(){
    this.formGroup = new FormGroup({
      username:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required)
    })
  }
  loginProcess(){
    if(this.formGroup.valid){
      this.authService.login(this.formGroup.value).subscribe(result=>{
        if(result.is_success==true){
          console.log(result)
          this.token= result.data.token
         this.router.navigate(['/movies'])
        }else{
          alert(result.is_success)
        }
      })
    }
  }
  

}
