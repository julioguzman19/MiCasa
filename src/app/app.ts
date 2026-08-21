import { Component } from '@angular/core';

import { Footer } from './components/layout/footer/footer';
import { Header } from './components/layout/header/header';
import { FeaturedFood } from './components/sections/featured-food/featured-food';
import { Gallery } from './components/sections/gallery/gallery';
import { Hero } from './components/sections/hero/hero';
import { MenuPreview } from './components/sections/menu-preview/menu-preview';
import { OurStory } from './components/sections/our-story/our-story';
import { Tortillas } from './components/sections/tortillas/tortillas';
import { Visit } from './components/sections/visit/visit';

@Component({
  selector: 'app-root',
  imports: [
    Header,
    Hero,
    FeaturedFood,
    Tortillas,
    MenuPreview,
    OurStory,
    Gallery,
    Visit,
    Footer,
  ],
  templateUrl: './app.html',
})
export class App {}