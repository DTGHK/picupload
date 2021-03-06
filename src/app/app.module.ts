import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from './material.module'
import {FileUploadModule} from "ng2-file-upload";   
import { ImageCropperModule } from 'ngx-image-cropper';

import { TokenInterceptorService } from './service/token-interceptor.service';
import {HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './user-authentication/login/login.component';
import { PollFromComponent } from './pollform/poll-from/poll-from.component';
import { MatDatepickerModule, MatNativeDateModule, MatToolbarModule, MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatMenuModule, MatTableModule, MatIconModule, MatProgressSpinnerModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PollFromComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FileUploadModule,
    ImageCropperModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule, 
    MatNativeDateModule,
    MatToolbarModule,
    MatButtonModule, 
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
