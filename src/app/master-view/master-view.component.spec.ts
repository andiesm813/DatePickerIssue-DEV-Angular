import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IgxTabsModule, IgxCardModule, IgxButtonModule, IgxRippleModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxSelectModule, IgxInputGroupModule, IgxIconModule, IgxInputGroupModule, IgxSelectModule, IgxInputGroupModule, IgxIconModule, IgxInputGroupModule, IgxDatePickerModule, IgxInputGroupModule, IgxSelectModule, IgxInputGroupModule, IgxIconModule, IgxInputGroupModule, IgxButtonModule, IgxRippleModule, IgxListModule, IgxAvatarModule, IgxAvatarModule, IgxAvatarModule, IgxButtonModule, IgxRippleModule } from '@infragistics/igniteui-angular';
import { MasterViewComponent } from './master-view.component';

describe('MasterViewComponent', () => {
  let component: MasterViewComponent;
  let fixture: ComponentFixture<MasterViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterViewComponent ],
      imports: [ NoopAnimationsModule, FormsModule, HttpClientTestingModule, IgxTabsModule, IgxCardModule, IgxButtonModule, IgxRippleModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxSelectModule, IgxInputGroupModule, IgxIconModule, IgxInputGroupModule, IgxSelectModule, IgxInputGroupModule, IgxIconModule, IgxInputGroupModule, IgxDatePickerModule, IgxInputGroupModule, IgxSelectModule, IgxInputGroupModule, IgxIconModule, IgxInputGroupModule, IgxButtonModule, IgxRippleModule, IgxListModule, IgxAvatarModule, IgxAvatarModule, IgxAvatarModule, IgxButtonModule, IgxRippleModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
