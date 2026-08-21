import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-footer',
  templateUrl: './footer.html',
})
export class Footer {
  readonly currentYear = new Date().getFullYear();
}