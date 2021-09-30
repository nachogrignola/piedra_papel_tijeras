import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be r when they clicked rock', () => {
    const expected = 'r'
    const result = component.play('rock')
    expect(expected).toBe(<any>result)
  })
  it('should be p when they clicked rock', () => {
    const expected = 'p'
    const result = component.play('paper')
    expect(expected).toBe(<any>result)
  })
  it('should be s when they clicked rock', () => {
    const expected = 's'
    const result = component.play('scissors')
    expect(expected).toBe(<any>result)
  })
});
