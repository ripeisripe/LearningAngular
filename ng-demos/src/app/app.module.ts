import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { TemplateComponent } from './template/template.component';
import { ReceipeComponent } from './receipe/receipe.component';
import { FormComponent } from './form/form.component';
import {FormsModule} from "@angular/forms";
import { ConvertorComponent } from './convertor/convertor.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    TemplateComponent,
    ReceipeComponent,
    FormComponent,
    ConvertorComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
