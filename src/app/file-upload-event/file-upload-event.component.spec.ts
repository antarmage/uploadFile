import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploadEventComponent } from './file-upload-event.component';

describe('FileUploadEventComponent', () => {
  let component: FileUploadEventComponent;
  let fixture: ComponentFixture<FileUploadEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileUploadEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileUploadEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
