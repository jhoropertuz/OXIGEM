import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EscaneoQrOxigemPage } from './escaneo-qr-oxigem.page';

describe('EscaneoQrOxigemPage', () => {
  let component: EscaneoQrOxigemPage;
  let fixture: ComponentFixture<EscaneoQrOxigemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscaneoQrOxigemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EscaneoQrOxigemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
