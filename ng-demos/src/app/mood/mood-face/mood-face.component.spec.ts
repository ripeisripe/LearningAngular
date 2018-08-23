import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoodFaceComponent } from './mood-face.component';

describe('MoodFaceComponent', () => {
  let component: MoodFaceComponent;
  let fixture: ComponentFixture<MoodFaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoodFaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoodFaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
