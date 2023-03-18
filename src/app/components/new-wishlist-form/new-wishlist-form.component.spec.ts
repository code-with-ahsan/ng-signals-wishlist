import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewWishlistFormComponent } from './new-wishlist-form.component';

describe('NewWishlistFormComponent', () => {
  let component: NewWishlistFormComponent;
  let fixture: ComponentFixture<NewWishlistFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ NewWishlistFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewWishlistFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
