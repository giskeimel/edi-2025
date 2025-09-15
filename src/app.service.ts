import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  
  
  getHello(): string {
    return 'Hola soy gisele keimel!';
  }

  getChau(): string {
    return 'Bye bye Gisele!';
  }

  crearUsuario(): string {
    return 'Usuario creado en el servicio';
  }



}
