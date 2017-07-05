import { Component } from '@angular/core';
import { MdDialog } from '@angular/material';

import { AdvancedSearchComponent } from '/home/utkarsh/yaluk-advance-search/src/app/advanced-search/advanced-search.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';

  constructor(public dialog: MdDialog) {}

  openDialog() {
    this.dialog.open(AdvancedSearchComponent);
  }

}
