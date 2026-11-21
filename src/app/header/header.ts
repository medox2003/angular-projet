import { Component } from '@angular/core';

// Slide 10 : interpolation, property binding, event binding
@Component({
  selector: 'app-header',
  templateUrl: './header.html',
})
export class Header {
  title = 'TaskFlow';
  canDelete = false;

  rename() {
    this.title = 'Mes tâches';
  }
}
