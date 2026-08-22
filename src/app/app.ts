import { Component } from '@angular/core';

import { Footer } from './components/layout/footer/footer';
import { Header } from './components/layout/header/header';
import { Hero } from './components/sections/hero/hero';
import { Menu } from './components/sections/menu/menu';
import { About } from './components/sections/about/about';
import { Visit } from './components/sections/visit/visit';

@Component({
  selector: 'app-root',
  imports: [
    Header,
    Hero,
    Menu,
    About,
    Visit,
    Footer,
  ],
  templateUrl: './app.html',
})
export class App {}