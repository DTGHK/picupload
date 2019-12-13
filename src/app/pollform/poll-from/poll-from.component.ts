import { Component, OnInit, ChangeDetectorRef, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { PollRegisterService } from 'src/app/service/poll-register/poll-register.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ImagePreviewComponent } from '../cropper-popup/image-preview/image-preview.component';

export interface DialogData {
  selectFile: any
  child: string;
}

@Component({
  selector: 'app-poll-from',
  templateUrl: './poll-from.component.html',
  styleUrls: ['./poll-from.component.css']
})

// @Directive({ selector: '[ng2FileSelect]' })
export class PollFromComponent implements OnInit {


  ram: string = "aman"
  selectedFile = null;
  isUploaded: boolean = false;
  croppedImage: any;
  



  constructor(private formBuilder: FormBuilder,
     public dialog: MatDialog,
      private cd: ChangeDetectorRef,
       private pollService: PollRegisterService,
       ) {

  }

  ngOnInit() {
  }

 

  

  


  onSubmit() {
    
  }


  onSelect(event) {
    console.log(event.target.value)
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ImagePreviewComponent, {
      width: '700px',
      height: '700px',
      data: { child: this.ram, selectfile: this.selectedFile}
      //data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     this.croppedImage = localStorage.getItem('img')

     /// this.animal = result;
    });
  }
}
