import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FileUploadCompComponent } from './file-upload-comp/file-upload-comp.component';
import { FileUploadEventComponent } from './file-upload-event/file-upload-event.component';
import {FileUploadService} from './file-upload.service';
@NgModule({
  declarations: [
    AppComponent,
    FileUploadCompComponent,
    FileUploadEventComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [FileUploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
