import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlanoEdificioComponent } from './plano-edificio.component';

describe('PlanoEdificioComponent', () => {
  let component: PlanoEdificioComponent;
  let fixture: ComponentFixture<PlanoEdificioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlanoEdificioComponent] // Cambiar imports a declarations
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanoEdificioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
