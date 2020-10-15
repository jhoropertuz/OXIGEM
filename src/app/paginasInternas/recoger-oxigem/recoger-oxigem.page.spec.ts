import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecogerOxigemPage } from './recoger-oxigem.page';

describe('RecogerOxigemPage', () => {
  let component: RecogerOxigemPage;
  let fixture: ComponentFixture<RecogerOxigemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecogerOxigemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecogerOxigemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
