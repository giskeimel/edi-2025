import { Controller, Get, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {   
  }


  @Get('hello') // http://localhost:3002/api/hello
  getHello(): string {
    return this.appService.getHello();
  }


  @Get()
  getBye(): string {
    return this.appService.getChau();
  }

  @Post('usuarios')
  crearUsuario(): string {
    return this.appService.crearUsuario();
  }

 
}
