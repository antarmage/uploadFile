import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploadCompComponent } from './file-upload-comp.component';

describe('FileUploadCompComponent', () => {
  let component: FileUploadCompComponent;
  let fixture: ComponentFixture<FileUploadCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileUploadCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileUploadCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
