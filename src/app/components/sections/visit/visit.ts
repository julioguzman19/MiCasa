import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-visit',
  templateUrl: './visit.html',
})
export class Visit {
  readonly address = '2401 Constitution Boulevard, West Valley City, UT 84119';
  readonly phone = '(801) 973-6475';

  readonly addressCopied = signal(false);

  async copyAddress(): Promise<void> {
    await navigator.clipboard.writeText(this.address);

    this.addressCopied.set(true);

    setTimeout(() => {
      this.addressCopied.set(false);
    }, 2000);
  }
}