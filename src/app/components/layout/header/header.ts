import { Component, HostListener, OnInit, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-header',
  templateUrl: './header.html',
})
export class Header implements OnInit {
  readonly activeSection = signal('home');

  private readonly sections = ['home', 'menu', 'about', 'visit'];

  ngOnInit(): void {
    this.updateActiveSection();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.updateActiveSection();
  }

  setActiveSection(section: string): void {
    this.activeSection.set(section);
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