import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Import Reactive Forms Module form @angular/forms */
import { ReactiveFormsModule} from '@angular/forms';

import {DynamicFormComponent} from './components/dynamicForms-component/dynamic-form.component';
import {DynamicFormQuestionComponent} from './components/dynamicFormQuestion-component/dynamic-form-question.component';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    PageNotFoundComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
