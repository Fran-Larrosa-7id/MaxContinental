import { afterNextRender, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('MaxContinental');

  constructor() {
    afterNextRender(() => {
      AOS.init({
        duration: 650,
        easing: 'ease-out-cubic',
        once: true,
        offset: 24
      });
    });
  }
}
