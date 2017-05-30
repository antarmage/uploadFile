import { Injectable } from '@angular/core';
import {FileUploadEventComponent} from './file-upload-event/file-upload-event.component'
@Injectable()
export class FileUploadService {

  constructor() { }
  /*
  * To log the file name from event component
  */
  logFileNameServiceMethod(filename:string){
     console.log('from service'+filename);
  }
   
}
