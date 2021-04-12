import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoopHomePage } from './loop-home.page';

describe('LoopHomePage', () => {
  let component: LoopHomePage;
  let fixture: ComponentFixture<LoopHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoopHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoopHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
