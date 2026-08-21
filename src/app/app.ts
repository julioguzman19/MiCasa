import { Component } from '@angular/core';

import { Footer } from './components/layout/footer/footer';
import { Header } from './components/layout/header/header';
import { Hero } from './components/sections/hero/hero';
import { MenuPreview } from './components/sections/menu-preview/menu-preview';
import { OurStory } from './components/sections/our-story/our-story';
import { Visit } from './components/sections/visit/visit';

@Component({
  selector: 'app-root',
  imports: [
    Header,
    Hero,
    MenuPreview,
    OurStory,
    Visit,
    Footer,
  ],
  templateUrl: './app.html',
})
export class App {}