import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EntregaOxigemPage } from './entrega-oxigem.page';

describe('EntregaOxigemPage', () => {
  let component: EntregaOxigemPage;
  let fixture: ComponentFixture<EntregaOxigemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntregaOxigemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EntregaOxigemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
