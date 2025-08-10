import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./shared/header/header";
import { Footer } from './shared/footer/footer';

import { InfoPaginaService } from './services/info-pagina.service';@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portafolio');

  constructor( public InfoPaginaService: InfoPaginaService ) {
    // The InfoPagina service is injected here, which will trigger its constructor
    // and log 'Servicio de info pagina listo' to the console.
    //console.log('App component initialized');
  }
}
