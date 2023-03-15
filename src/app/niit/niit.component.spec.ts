import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NiitComponent } from './niit.component';

describe('NiitComponent', () => {
  let component: NiitComponent;
  let fixture: ComponentFixture<NiitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NiitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NiitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
