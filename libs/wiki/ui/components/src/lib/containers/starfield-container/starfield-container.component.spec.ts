import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StarfieldContainerComponent } from './starfield-container.component';

describe('StarTravelContainerComponent', () => {
  let component: StarfieldContainerComponent;
  let fixture: ComponentFixture<StarfieldContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StarfieldContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StarfieldContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
