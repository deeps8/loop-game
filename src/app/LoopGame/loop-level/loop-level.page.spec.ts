import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoopLevelPage } from './loop-level.page';

describe('LoopLevelPage', () => {
  let component: LoopLevelPage;
  let fixture: ComponentFixture<LoopLevelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoopLevelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoopLevelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
