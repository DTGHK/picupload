import { Component, OnInit, ChangeDetectorRef, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { PollRegisterService } from 'src/app/service/poll-register/poll-register.service';

@Component({
  selector: 'app-poll-from',
  templateUrl: './poll-from.component.html',
  styleUrls: ['./poll-from.component.css']
})

// @Directive({ selector: '[ng2FileSelect]' })
export class PollFromComponent implements OnInit {


  image: File;
  resData: any;
  selectedFile = null;

  imageChangedEvent: any = '';
  croppedImage: any = '';


  constructor(private formBuilder: FormBuilder, private cd: ChangeDetectorRef, private pollService: PollRegisterService) {

  }

  ngOnInit() {
  }

  onFileSelected(event) {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
      this.imageChangedEvent = event;
      console.log(this.selectedFile);
    }
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.file;
    console.log(this.croppedImage);

  }

  imageLoaded() {
    // show cropper
  }
  cropperReady() {
    // cropper ready
  }
  loadImageFailed() {
    // show message
  }


  onSubmit() {
    const payload = new FormData();
    payload.append('orgId', '1');
    payload.append('subOrgId', '1');
    payload.append('uuid', '111b55c2d0-641e-4045-b1d5-482c62da1624');
    payload.append('fileName', this.selectedFile.name);
    payload.append('totalFileSize', this.selectedFile.size);
    payload.append('contentType', this.selectedFile.type);
    payload.append('file', this.croppedImage, this.croppedImage);
    console.log(payload)
    this.pollService.uploadImage(payload, this.selectedFile)
      .subscribe((data: any) => {
        this.resData = data;
        console.log(this.resData);
      });
  }


  onSelect(event) {
    console.log(event.target.value)
  }
}
