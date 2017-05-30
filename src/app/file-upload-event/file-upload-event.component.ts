import { Component, OnInit } from '@angular/core';
import {FileUploadService} from '../file-upload.service';

@Component({
  selector: 'app-file-upload-event',
  templateUrl: './file-upload-event.component.html',
  styleUrls: ['./file-upload-event.component.css']
})
export class FileUploadEventComponent implements OnInit {

  constructor(private fileuploadservice:FileUploadService) { }

  ngOnInit() {
  }
  //capture event
  fileEvent(filename:any){
    let changefilename = filename.target.files[0].name;
    //console.log(filename.target.files[0].name);
    this.fileuploadservice.logFileNameServiceMethod(changefilename);
  }

}
