import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProdFormPage } from './prod-form.page';

describe('ProdFormPage', () => {
  let component: ProdFormPage;
  let fixture: ComponentFixture<ProdFormPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProdFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
