import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkSubmitterComponent } from './link-submitter.component';

describe('LinkSubmitterComponent', () => {
  let component: LinkSubmitterComponent;
  let fixture: ComponentFixture<LinkSubmitterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkSubmitterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkSubmitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
