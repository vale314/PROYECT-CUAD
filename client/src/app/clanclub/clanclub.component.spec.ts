import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClanClubComponent } from './clanclub.component';

describe('ClanClubComponent', () => {
  let component: ClanClubComponent;
  let fixture: ComponentFixture<ClanClubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClanClubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClanClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
