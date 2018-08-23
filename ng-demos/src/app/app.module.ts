import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { TemplateComponent } from './template/template.component';
import { ReceipeComponent } from './receipe/receipe.component';
import { FormComponent } from './form/form.component';
import {FormsModule} from "@angular/forms";
import { ConvertorComponent } from './convertor/convertor.component';
import { CanvasComponent } from './mood/canvas/canvas.component';
import { HappyComponent } from './mood/happy/happy.component';
import { SosoComponent } from './mood/soso/soso.component';
import { AngryComponent } from './mood/angry/angry.component';
import { TabListComponent } from './mood/tab-list/tab-list.component';
import { MoodFaceComponent } from './mood/mood-face/mood-face.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    TemplateComponent,
    ReceipeComponent,
    FormComponent,
    ConvertorComponent,
    CanvasComponent,
    CanvasComponent,
    HappyComponent,
    SosoComponent,
    AngryComponent,
    TabListComponent,
    MoodFaceComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
