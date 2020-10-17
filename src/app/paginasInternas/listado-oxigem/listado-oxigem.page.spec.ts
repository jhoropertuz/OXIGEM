import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListadoOxigemPage } from './listado-oxigem.page';

describe('ListadoOxigemPage', () => {
  let component: ListadoOxigemPage;
  let fixture: ComponentFixture<ListadoOxigemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoOxigemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListadoOxigemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
