import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

/**
 * @title Badge overview
 */
@Component({
  selector: 'badge-overview-example',
  templateUrl: 'badge-overview-example.html',
  styleUrls: ['badge-overview-example.css'],
})
export class BadgeOverviewExample {
  readonly control = new FormControl<string>(
    '3,4,3,4,3,6,3,4,3,10,3,3,4,6,3,8'
  );

  getCells() {
    return this.control.value!.split(',');
  }

  setCells() {
    //this.cells = [3, 6 9];
  }
}

/**  Copyright 2023 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
