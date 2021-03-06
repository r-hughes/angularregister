import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should be ready to submit register form', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.onsubmit).toHaveBeenCalledBefore;
  });

  it('should have form ready for user information', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#userForm')?.innerHTML).toContain('firstName' && 'lastName' && 'email');
  });
});
