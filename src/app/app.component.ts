import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Indumentaria JH deportivo';
  scrollToTop(event: Event): void {
  event.preventDefault(); // evita que el enlace recargue la página
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

}

