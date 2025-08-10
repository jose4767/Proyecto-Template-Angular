

// Aqui esta el modelo de la información de la página asi como se define en el JSON
// Este modelo se utiliza para tipar la información que se obtiene del servicio InfoPaginaService
// Usamos una de las extensiones para generar interfaces a partir del archivo JSON que creamos con crtl + shift + p -> TypeScript: Generate interface from JSON
// El signo de interrogación (?) indica que la propiedad es opcional puede que se use como no en la pagina .
export interface InfoPagina {
  titulo?: string;
  email?: string;
  nombre_corto?: string;
  pagina_web?: string;
  facebook?: string;
  twitter?: string;
  instagram?: string;
  tublr?: string;
  equipo_trabajo?: Equipotrabajo[];
}

interface Equipotrabajo {
  nombre?: string;
  cargo?: string;
  imagen?: string;
}