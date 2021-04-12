import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateLevelPage } from './create-level.page';

describe('CreateLevelPage', () => {
  let component: CreateLevelPage;
  let fixture: ComponentFixture<CreateLevelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateLevelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateLevelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
