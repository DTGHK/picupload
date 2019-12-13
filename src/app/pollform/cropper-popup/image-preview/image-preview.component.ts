import { Component, OnInit, Input, inject, Inject } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PollRegisterService } from 'src/app/service/poll-register/poll-register.service';


export interface DialogData {
  selectFile: any
  name: string;
}




@Component({
  selector: 'app-image-preview',
  templateUrl: './image-preview.component.html',
  styleUrls: ['./image-preview.component.css']
})
export class ImagePreviewComponent implements OnInit {
  resData: any;
  isUploaded: boolean;

  constructor( public dialogRef: MatDialogRef<ImagePreviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private pollService: PollRegisterService) { }

  @Input() selectedFileChild;

 

  croppedImage: any = '';
    selectedFile=null;
    imageChangedEvent: any = '';
  

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
    this.croppedImage = event;
    console.log('cropped base64',this.croppedImage.base64, 'cropped image', this.croppedImage);

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
    payload.append('file', this.croppedImage.file, this.croppedImage);
    console.log("payload",payload)
    this.pollService.uploadImage(payload, this.selectedFile)
      .subscribe((data: any) => {
        this.resData = data.fullPath;
        localStorage.setItem("img",this.resData)
        this.isUploaded = true;
      });
  }


}
