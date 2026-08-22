import { Component, ElementRef, HostListener, OnInit, signal, ViewChild } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-header',
  templateUrl: './header.html',
})
export class Header implements OnInit {
  @ViewChild('orderMenu')
  private orderMenu?: ElementRef<HTMLElement>;

  readonly activeSection = signal('home');
  readonly orderMenuOpen = signal(false);

  readonly pickupUrl =
    'https://order.online/business/Mi%20Casa%20Tortilleria-11532486?pickup=true&utm_source=sdk';

  readonly deliveryUrl =
    'https://order.online/business/Mi%20Casa%20Tortilleria-11532486?delivery=true&utm_source=sdk';

  private readonly sections = ['home', 'menu', 'about', 'visit'];

  ngOnInit(): void {
    this.updateActiveSection();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.updateActiveSection();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as Node;

    if (
      this.orderMenuOpen() &&
      this.orderMenu &&
      !this.orderMenu.nativeElement.contains(target)
    ) {
      this.closeOrderMenu();
    }
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeOrderMenu();
  }

  setActiveSection(section: string): void {
    this.activeSection.set(section);
    this.closeOrderMenu();
  }

  toggleOrderMenu(): void {
    this.orderMenuOpen.update((open) => !open);
  }

  closeOrderMenu(): void {
    this.orderMenuOpen.set(false);
  }

  private updateActiveSection(): void {
    const headerOffset = 100;

    let currentSection = 'home';

    for (const id of this.sections) {
      const section = document.getElementById(id);

      if (!section) {
        continue;
      }

      const top = section.getBoundingClientRect().top;

      if (top <= headerOffset) {
        currentSection = id;
      }
    }

    this.activeSection.set(currentSection);
  }
}