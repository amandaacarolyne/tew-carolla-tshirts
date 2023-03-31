import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TShirtListComponent } from './t-shirt-list.component';

describe('TShirtListComponent', () => {
  let component: TShirtListComponent;
  let fixture: ComponentFixture<TShirtListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TShirtListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TShirtListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
