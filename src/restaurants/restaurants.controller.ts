import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';
import { RestaurantModel } from './RestaurantModel';

@Controller('restaurants')
export class RestaurantsController {
    constructor(private readonly restaurantsService: RestaurantsService) {   
    }

@Get()
getRestaurants(){
    return this.restaurantsService.getRestaurants();
  }

@Get('list')
getRestaurants2(): string {
    return 'Lista de restaurantes';
  }
@Get(':id') //  localhost:3000/restaurants/15
getMenu(@Param('id') idRestaurant:string): string {
    return this.restaurantsService.getRestaurantById(idRestaurant);
  }

  @Post()
  crearRestaurante(@Body() restaurant: RestaurantModel ) : string{

    return this.restaurantsService.crearRestaurant( restaurant);
  }

  @Put(':id')
  modificarRestaurant(@Body() restaurant: RestaurantModel, @Param('id') idRestaurant:string ) : string{
    // Lógica para modificar el restaurante con id=idRestaurant
    return `Restaurante con id ${idRestaurant} modificado correctamente`;
  }





}
