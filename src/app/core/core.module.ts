import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { FormsModule } from '@angular/forms';
import { RegisterPageComponent } from './register-page/register-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CustomValidatorDirective } from './register-page/validators/custom-validator.directive';


@NgModule({

  declarations: [
    RegisterPageComponent,
    HomePageComponent,
    CustomValidatorDirective,
  ],

  imports: [
    CommonModule,
    FormsModule,
    CoreRoutingModule,
  ],

  exports: [
    RegisterPageComponent,
    CustomValidatorDirective
  ]
})
export class CoreModule { }
