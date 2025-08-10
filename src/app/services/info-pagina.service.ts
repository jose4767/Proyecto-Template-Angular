import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;

  //Injecting HttpClient to make HTTP requests para las peticiones HTTP
  constructor( private http: HttpClient ) { 
    //console.log('Servicio de info pagina listo'); esto es para verificar que el servicio se ha inicializado correctamente

    this.http.get('assets/data/data-pagina.json')
      .subscribe( (resp: InfoPagina) => {//manejamos la interfaz InfoPagina para tipar la respuesta en base a la estructura del JSON CON L CUAL PODEMOS PARAMETRIAR LOS DATOS

        this.cargada = true; // Indicamos que la información ha sido cargada
        this.info = resp; // Asignamos la respuesta a la propiedad info


        //se puede usar resp: any para evitar errores pero es menos elegante
        console.log(resp);
        // Aquí puedes manejar la respuesta de la petición HTTP

        //Asi accedemos a los datos del JSON uno por uno ejemplo caso Twitter si o si debemos crear la interfaz Angular20
        //console.log( resp['twitter'] );
      });
  }
  
}
