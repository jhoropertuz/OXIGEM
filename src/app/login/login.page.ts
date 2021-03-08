import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
 validations_form: FormGroup;
 esperar=true;
constructor(public formBuilder: FormBuilder, private router: Router) { }
   
  ngOnInit() {
    this.validations_form = this.formBuilder.group({
      identificacion: new FormControl('', Validators.compose([
        Validators.required
       /* , Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$') */
      ]))
    });
    
    setTimeout(()=>{
      this.esperar=false;
    }, 3000);
   
  }

  validation_messages = {
    'identificacion': [
      { type: 'required', message: 'identificacion es requerida.' }
    ]
  };

  onSubmitLogin(values){
    this.router.navigateByUrl("listado-oxigem/recoger"); 
  }


}
