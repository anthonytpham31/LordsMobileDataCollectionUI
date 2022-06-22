import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuildGiftDataComponent } from './guild-gift-data.component';

describe('GuildGiftDataComponent', () => {
  let component: GuildGiftDataComponent;
  let fixture: ComponentFixture<GuildGiftDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuildGiftDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuildGiftDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
