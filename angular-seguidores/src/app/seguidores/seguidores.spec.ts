import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Seguidores } from './seguidores';

describe('Seguidores', () => {
  let component: Seguidores;
  let fixture: ComponentFixture<Seguidores>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Seguidores]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Seguidores);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
