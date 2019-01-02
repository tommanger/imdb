import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenStoryComponent } from './open-story.component';

describe('OpenStoryComponent', () => {
  let component: OpenStoryComponent;
  let fixture: ComponentFixture<OpenStoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenStoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
