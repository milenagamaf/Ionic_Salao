import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProdListPage } from './prod-list.page';

describe('ProdListPage', () => {
  let component: ProdListPage;
  let fixture: ComponentFixture<ProdListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProdListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
