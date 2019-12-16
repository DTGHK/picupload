import { Component, OnInit, ChangeDetectorRef, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { PollRegisterService } from 'src/app/service/poll-register/poll-register.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ImagePreviewComponent } from '../cropper-popup/image-preview/image-preview.component';

import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortalDirective, ComponentPortal } from '@angular/cdk/portal';

export interface DialogData {
  selectFile: any
  child: string;
}

@Component({
  selector: 'app-poll-from',
  templateUrl: './poll-from.component.html',
  styleUrls: ['./poll-from.component.css']
})

export class PollFromComponent implements OnInit {


  ram: string = "aman"
  selectedFile = null;
  isUploaded: boolean = false;
  croppedImage: any;
  imageChangedEvent: any;
  isImageSelected: boolean;
  poll: FormGroup;


  overlayRef: OverlayRef;

  constructor(
    private formBuilder: FormBuilder,
    public overlay: Overlay,
    public dialog: MatDialog,
    private cd: ChangeDetectorRef,
    private pollService: PollRegisterService,
  ) {

  }

  ngOnInit() {

    this.poll = this.formBuilder.group({
      community:["", Validators.required],
      areaOfInterest: ["", Validators.required],
      startdate :["", Validators.required],
      enddate :["", Validators.required]
    })
  }


  openComponentOverlay() {
    
    const overlayRef = this.overlay.create({
      hasBackdrop: true,
      width: '200px',
      height: '200px'
    });

    const popupComponentPortal = new ComponentPortal(ImagePreviewComponent);

    overlayRef.attach(popupComponentPortal);
    
    overlayRef.backdropClick().subscribe(() => {
      overlayRef.dispose();

    });
  }

  onFileSelected(event) {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
      this.imageChangedEvent = event;
      console.log(this.selectedFile);
      this.isImageSelected = true
    }
  }

  onUpload(event) {
    this.isUploaded = event;
  }

  onSubmit() {
    console.log("onSubmit() values: ",this.poll.value);
  }

  onSelect(event) {
    console.log(event.target.value)
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ImagePreviewComponent, {
      width: '700px',
      height: '700px',
      data: { selectfile: this.selectedFile }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.croppedImage = localStorage.getItem('img')

    });
  }
}
