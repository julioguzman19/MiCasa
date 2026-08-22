import { Component, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-hero',
  templateUrl: './hero.html',
})
export class Hero implements OnInit, OnDestroy {
  readonly heroImages = [
    {
      src: 'images/carnitasPlate.png',
      alt: 'carnitas plate from Mi Casa Tortilleria',
    },
    {
      src: 'images/tacos.png',
      alt: 'Street tacos from Mi Casa Tortilleria',
    },
    {
      src: 'images/menudo.png',
      alt: 'Menudo from Mi Casa Tortilleria',
    },
    {
      src: 'images/tamales.png',
      alt: 'Tamales from Mi Casa Tortilleria',
    },
  ];

  readonly currentIndex = signal(0);

  private intervalId?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.startCarousel();
  }

  ngOnDestroy(): void {
    this.stopCarousel();
  }

  nextImage(): void {
    this.currentIndex.update((index) => (index + 1) % this.heroImages.length);
    this.restartCarousel();
  }

  previousImage(): void {
    this.currentIndex.update(
      (index) => (index - 1 + this.heroImages.length) % this.heroImages.length,
    );

    this.restartCarousel();
  }

  goToImage(index: number): void {
    this.currentIndex.set(index);
    this.restartCarousel();
  }

  private startCarousel(): void {
    this.intervalId = setInterval(() => {
      this.currentIndex.update((index) => (index + 1) % this.heroImages.length);
    }, 5000);
  }

  private stopCarousel(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private restartCarousel(): void {
    this.stopCarousel();
    this.startCarousel();
  }
}